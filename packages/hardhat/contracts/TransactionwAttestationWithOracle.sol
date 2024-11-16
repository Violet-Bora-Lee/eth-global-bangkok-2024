// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

interface IAttestationService {
    function attest(address user, string calldata data) external;
    function getAttestations(address user) external view returns (string[] memory);
}

interface IChronicle {
    function read() external view returns (uint256 value);
    function readWithAge() external view returns (uint256 value, uint256 age);
}

interface ISelfKisser {
    function selfKiss(address oracle) external;
}

contract TransportWithAttestation {
    IAttestationService public attestationService;
    IChronicle public chronicle;
    ISelfKisser public selfKisser;

    struct Request {
        address requester;
        address serviceProvider;
        uint paymentAmount;
        uint priceAtRequest;  // ETH/USD price when request was created
        bool completed;
    }

    mapping(uint => Request) public requests;
    uint public requestCount;

    mapping(address => uint) public ratings;
    mapping(address => uint) public ratingCounts;

    event RequestCreated(uint requestId, address requester, uint paymentAmount, uint priceAtRequest);
    event RequestCompleted(uint requestId, uint rating, uint finalPayment);

    //Chronicle Oracle : 0xc6639C0591d632Bf689ceab617A0377072e7f524
    //SelfKisser: 0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d

    constructor(
        address _attestationService,
        address _chronicle,
        address _selfKisser
    ) {
        attestationService = IAttestationService(_attestationService);
        chronicle = IChronicle(_chronicle);
        selfKisser = ISelfKisser(_selfKisser);
        
        selfKisser.selfKiss(address(chronicle));
    }
    function read() external view returns (uint256 val, uint256 age) {
        (val, age) = chronicle.readWithAge();
    }

    modifier onlyRequester(uint requestId) {
        require(requests[requestId].requester == msg.sender, "Caller is not the requester");
        _;
    }

    modifier onlyServiceProvider(uint requestId) {
        require(requests[requestId].serviceProvider == msg.sender, "Caller is not the service provider");
        _;
    }

   
    function createRequest(address serviceProvider, uint paymentAmount) public {
        (uint256 currentPrice, uint256 age) = chronicle.readWithAge();
        
        
        require(block.timestamp - age <= 1 hours, "Oracle data too old");

        requestCount++;
        requests[requestCount] = Request({
            requester: msg.sender,
            serviceProvider: serviceProvider,
            paymentAmount: paymentAmount,
            priceAtRequest: currentPrice,
            completed: false
        });

        emit RequestCreated(requestCount, msg.sender, paymentAmount, currentPrice);
    }

    
    function completeRequest(uint requestId, uint rating) public onlyServiceProvider(requestId) {
        require(rating >= 1 && rating <= 5, "Rating must be between 1 and 5");
        
        Request storage request = requests[requestId];
        require(!request.completed, "Request is already completed");

        (uint256 currentPrice, uint256 age) = chronicle.readWithAge();
        require(block.timestamp - age <= 1 hours, "Oracle data too old");

        // Calculate final payment accounting for ETH price changes
        uint finalPayment = (request.paymentAmount * request.priceAtRequest) / currentPrice;
        
        request.completed = true;
        ratings[request.serviceProvider] += rating;
        ratingCounts[request.serviceProvider]++;

        emit RequestCompleted(requestId, rating, finalPayment);
        
        // Create detailed attestation with price data
        string memory attestationData = string(abi.encodePacked(
            "Request completed with rating: ", 
            toString(rating),
            ", Final payment: ",
            toString(finalPayment)
        ));
        
        attestationService.attest(request.serviceProvider, attestationData);
    }

   
    function getAverageRating(address user) public view returns (uint) {
        if (ratingCounts[user] == 0) {
            return 0;
        }
        return ratings[user] / ratingCounts[user];
    }

   
    function getRequest(uint requestId) public view returns (Request memory) {
        return requests[requestId];
    }

    
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
     
}
