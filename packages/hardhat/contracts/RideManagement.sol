// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Profile.sol";

/**
 * @title RideManagement
 * @dev This contract manages rides, including their states and details. It provides functionality for posting, booking, and completing rides.
 */
contract RideManagement {
    Ride[] private _rides;
    mapping(bytes32 => uint256) private _rideIndexMap;
    uint256 private _rideCount = 0;

    /**
     * @dev Enum representing the various states a ride can be in.
     */
    enum RideState {
        Pending,      
        Posted,       
        Booked,      
        InProgress,   
        Completed,    
        Canceled,     
        Failed        
    }

    /**
     * @dev Struct representing a ride.
     */
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

    /**
     * @dev Function to post a new ride. Sets the initial state to Pending.
     */
    function postRide(uint256 price, uint256 totalSeats, string memory destination) public {
        bytes32 rideId = keccak256(abi.encodePacked(msg.sender, block.timestamp, _rideCount));
        Ride memory newRide = Ride({
            id: rideId,
            state: RideState.Pending,  // Set initial state to Pending
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

    /**
     * @dev Function for the driver to confirm a ride. Changes state from Pending to Posted.
     */
    function confirmRide(bytes32 rideId) public onlyOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Pending, "Ride is not in pending state");
        ride.state = RideState.Posted;
        emit RidePosted(ride.id, ride.owner);
    }

    /**
     * @dev Function for a passenger to book a ride. Changes state from Posted to Booked if no available seats remain.
     */
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

    /**
     * @dev Function for the driver to mark a ride as completed. Changes state from Booked to Completed.
     */
    function completeRide(bytes32 rideId) public onlyOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Booked, "Ride is not booked");
        ride.state = RideState.Completed;
        emit RideCompleted(rideId);
    }

    /**
     * @dev Function for the driver to cancel a ride. Can be called in Pending, Posted, or Booked states.
     */
    function cancelRide(bytes32 rideId) public onlyOwner(rideId) {
        Ride storage ride = _rides[_rideIndexMap[rideId]];
        require(ride.state == RideState.Pending || ride.state == RideState.Posted || ride.state == RideState.Booked, "Ride cannot be canceled");
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