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
        string meta;
    }

    event RidePosted(bytes32 indexed rideId);
    event RideBooked(bytes32 indexed rideId, address indexed passenger);
    event RideCompleted(bytes32 indexed rideId);
    event RideCanceled(bytes32 indexed rideId);

    modifier onlyRideOwner(bytes32 rideId) {
        Ride memory ride = getRide(rideId);
        require(msg.sender == ride.owner, "Must be ride owner");
        _;
    }

    function getRide(bytes32 rideId) public view returns (Ride memory) {
        uint256 index = _rideIndexMap[rideId];
        return _rides[index];
    }

    function postRide(
        string memory destination,
        uint256 price,
        uint256 totalSeats,
        string memory meta
    ) public {
        Ride memory ride;
        ride.id = keccak256(abi.encodePacked(msg.sender, destination, price, totalSeats, block.timestamp));
        ride.state = RideState.Posted;
        ride.owner = msg.sender;
        ride.price = price;
        ride.timestamp = block.timestamp;
        ride.totalSeats = totalSeats;
        ride.availableSeats = totalSeats;
        ride.destination = destination;
        ride.meta = meta;

        _rideIndexMap[ride.id] = _rideCount;
        _rides.push(ride);
        _rideCount += 1;

        emit RidePosted(ride.id);
    }

    function bookRide(bytes32 rideId, uint256 seats) public {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Posted, "Ride is not available");
        require(ride.availableSeats >= seats, "Not enough available seats");

        ride.passengers.push(msg.sender);
        ride.availableSeats -= seats;

        if (ride.availableSeats == 0) {
            ride.state = RideState.Booked;
        }

        emit RideBooked(rideId, msg.sender);
    }

    function completeRide(bytes32 rideId) public onlyRideOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Booked, "Ride is not in Booked state");
        ride.state = RideState.Completed;
        emit RideCompleted(rideId);
    }

    function cancelRide(bytes32 rideId) public onlyRideOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Posted, "Ride is not in Posted state");
        ride.state = RideState.Canceled;
        emit RideCanceled(rideId);
    }
}