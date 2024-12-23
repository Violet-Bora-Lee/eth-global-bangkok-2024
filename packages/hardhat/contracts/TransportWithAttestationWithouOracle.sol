// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAttestationService {
    function attest(address user, string calldata data) external;
    function getAttestations(address user) external view returns (string[] memory);
}

contract TransportWithAttestationWithoutOracle {
    IAttestationService public attestationService;

    struct Request {
        address requester;
        address serviceProvider;
        uint paymentAmount;
        bool completed;
    }

    mapping(uint => Request) public requests;
    uint public requestCount;

    mapping(address => uint) public ratings;
    mapping(address => uint) public ratingCounts;

    event RequestCreated(uint requestId, address requester, uint paymentAmount);
    event RequestCompleted(uint requestId, uint rating);

    constructor(address _attestationService) {
        attestationService = IAttestationService(_attestationService);
    }

    modifier onlyRequester(uint requestId) {
        require(requests[requestId].requester == msg.sender, "Caller is not the requester");
        _;
    }

    modifier onlyServiceProvider(uint requestId) {
        require(requests[requestId].serviceProvider == msg.sender, "Caller is not the service provider");
        _;
    }

    /**
     * @dev Function to create a new request.
     * @param serviceProvider The address of the service provider.
     * @param paymentAmount The amount to be paid for the service.
     */
    function createRequest(address serviceProvider, uint paymentAmount) public {
        requestCount++;
        requests[requestCount] = Request({
            requester: msg.sender,
            serviceProvider: serviceProvider,
            paymentAmount: paymentAmount,
            completed: false
        });
        emit RequestCreated(requestCount, msg.sender, paymentAmount);
    }

    /**
     * @dev Function for the service provider to complete a request.
     * @param requestId The ID of the request to be completed.
     * @param rating The rating given to the service provider.
     */
    function completeRequest(uint requestId, uint rating) public onlyServiceProvider(requestId) {
        Request storage request = requests[requestId];
        require(!request.completed, "Request is already completed");
        request.completed = true;
        ratings[request.serviceProvider] += rating;
        ratingCounts[request.serviceProvider]++;
        emit RequestCompleted(requestId, rating);
        attestationService.attest(request.serviceProvider, "Request completed with rating");
    }

    /**
     * @dev Function to get the average rating of a user.
     * @param user The address of the user.
     * @return The average rating of the user.
     */
    function getAverageRating(address user) public view returns (uint) {
        if (ratingCounts[user] == 0) {
            return 0;
        }
        return ratings[user] / ratingCounts[user];
    }

    /**
     * @dev Function to get the details of a request.
     * @param requestId The ID of the request.
     * @return The details of the request.
     */
    function getRequest(uint requestId) public view returns (Request memory) {
        return requests[requestId];
    }
}
