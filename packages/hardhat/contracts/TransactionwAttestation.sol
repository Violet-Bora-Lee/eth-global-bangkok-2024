// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAttestationService {
    function attest(address user, string calldata data) external;
    function getAttestations(address user) external view returns (string[] memory);
}




contract TransportAndDeliveryWithAttestation {
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

    function createRequest(uint _paymentAmount) public payable {
        require(msg.value == _paymentAmount, "Payment amount must be equal to the value sent");

        requestCount++;
        requests[requestCount] = Request({
            requester: msg.sender,
            serviceProvider: address(0),
            paymentAmount: _paymentAmount,
            completed: false
        });

        emit RequestCreated(requestCount, msg.sender, _paymentAmount);
    }

    function acceptRequest(uint _requestId) public {
        Request storage req = requests[_requestId];
        require(req.serviceProvider == address(0), "Request already accepted");

        req.serviceProvider = msg.sender;
    }

    function completeRequest(uint _requestId, uint _rating) public {
        Request storage req = requests[_requestId];
        require(req.serviceProvider == msg.sender, "Only service provider can complete the request");
        require(!req.completed, "Request already completed");

        req.completed = true;

        // Record the rating
        ratings[req.serviceProvider] += _rating;
        ratingCounts[req.serviceProvider]++;

        // Create an attestation
        attestationService.attest(req.serviceProvider, string(abi.encodePacked("Rating: ", uint2str(_rating))));

        emit RequestCompleted(_requestId, _rating);
    }

    function getAverageRating(address _user) public view returns (uint) {
        if (ratingCounts[_user] == 0) {
            return 0;
        }
        return ratings[_user] / ratingCounts[_user];
    }

    // Helper function to convert uint to string
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
}
