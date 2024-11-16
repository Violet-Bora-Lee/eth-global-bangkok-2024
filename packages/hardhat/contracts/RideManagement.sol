// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Profil.sol";

/**
 * @title RideManagement
 * @dev This contract manages rides, including their states and details. It provides functionality for posting, booking, and completing rides.
 */
contract RideManagement {
    Ride[] private _rides;
    mapping(bytes32 => uint256) private _rideIndexMap;
    uint256 private _rideCount = 0;

    enum RideState {
        Posted,
        Booked,
        Completed,
        Canceled
    }

    struct Ride {
        bytes32 id;
        RideState state;
        address owner;
        address[] passengers;
        uint256 price;
        uint256 timestamp;
        uint256 totalSeats;
        uint256 availableSeats;
        string destination;
    }

    event RidePosted(bytes32 indexed rideId, address indexed owner);
    event RideBooked(bytes32 indexed rideId, address indexed passenger);
    event RideCompleted(bytes32 indexed rideId);
    event RideCanceled(bytes32 indexed rideId);

    modifier onlyOwner(bytes32 rideId) {
        require(_rides[_rideIndexMap[rideId]].owner == msg.sender, "Caller is not the owner");
        _;
    }

    function postRide(uint256 price, uint256 totalSeats, string memory destination) public {
        bytes32 rideId = keccak256(abi.encodePacked(msg.sender, block.timestamp, _rideCount));
        Ride memory newRide = Ride({
            id: rideId,
            state: RideState.Posted,
            owner: msg.sender,
            passengers: new address[](0),
            price: price,
            timestamp: block.timestamp,
            totalSeats: totalSeats,
            availableSeats: totalSeats,
            destination: destination
        });
        _rides.push(newRide);
        _rideIndexMap[rideId] = _rideCount;
        _rideCount++;
        emit RidePosted(rideId, msg.sender);
    }

    function bookRide(bytes32 rideId) public {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Posted, "Ride is not available for booking");
        require(ride.availableSeats > 0, "No available seats");
        ride.passengers.push(msg.sender);
        ride.availableSeats--;
        if (ride.availableSeats == 0) {
            ride.state = RideState.Booked;
        }
        emit RideBooked(rideId, msg.sender);
    }

    function completeRide(bytes32 rideId) public onlyOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Booked, "Ride is not booked");
        ride.state = RideState.Completed;
        emit RideCompleted(rideId);
    }

    function cancelRide(bytes32 rideId) public onlyOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Posted || ride.state == RideState.Booked, "Ride cannot be canceled");
        ride.state = RideState.Canceled;
        emit RideCanceled(rideId);
    }

    function getRide(bytes32 rideId) public view returns (Ride memory) {
        return _rides[_rideIndexMap[rideId]];
    }

    function getAllRides() public view returns (Ride[] memory) {
        return _rides;
    }
}