// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Profil {

    struct Driver {
        bool isDriver;          
        uint256 rate;           // Driver rate 
        string carAssetUrl;     // Car image and description ie number of seats available, pointing towards storacha
        string infoAssetUrl;    // Driver image, name , age pointing towards storacha database
        uint256 counterCourse;
        string zkPassport; 
    }

    struct Passenger {
        bool isPassenger;          
        uint256 rate;           // Passenger rate 
        string infoAssetUrl;    // Passenger image, name , age pointing towards storacha database
        uint256 counterCourse;
        string zkPassport; 
    }

    event DriverAdded(address indexed account);
    event DriverRemoved(address indexed account);
    event PassengerAdded(address indexed account); 
    event PassengerRemoved(address indexed account);

    mapping(address => Driver) private drivers;
    mapping(address => Passenger) private passengers;

    // Define modifiers that checks to see if msg.sender has the appropriate role
    modifier onlyDriver() {
        require(isDriver(msg.sender), "Sender isn't a driver");
        _;
    }

    modifier onlyPassenger() {
        require(isPassenger(msg.sender), "Sender isn't a passenger");
        _;
    }

    function addDriver(uint256 _startingRate, string memory _carAssetUrl, string memory _profileAssetUrl) 
        public 
    {
        require(!isDriver(msg.sender), "Sender is already a driver");
        Driver memory driverDetails;
        driverDetails.isDriver = true;
        driverDetails.counterCourse = 0; 
        driverDetails.rate = _startingRate;
        driverDetails.carAssetUrl = _carAssetUrl;
        driverDetails.infoAssetUrl = _profileAssetUrl;
        drivers[msg.sender] = driverDetails;
        emit DriverAdded(msg.sender);
    }

    function addPassenger(uint256 _startingRate, string memory _profileAssetUrl) 
        public 
    {
        require(!isPassenger(msg.sender), "Sender is already a passenger");
        Passenger memory passengerDetail;
        passengerDetail.isPassenger = true;
        passengerDetail.counterCourse = 0; 
        passengerDetail.rate = _startingRate;
        passengerDetail.infoAssetUrl = _profileAssetUrl;
        passengers[msg.sender] = passengerDetail;
        emit PassengerAdded(msg.sender);
    }

    function removePassenger() 
        public
        onlyPassenger
    {
        delete passengers[msg.sender];
        emit PassengerRemoved(msg.sender);
    }

    function removeDriver() 
        public
        onlyDriver
    {
        delete drivers[msg.sender];
        emit DriverRemoved(msg.sender);
    }

    function updateRate(uint256 _newRate, address _account, bool _isDriver) 
        public 
    {
        if (_isDriver) {
            require(isPassenger(msg.sender), "Sender isn't a passenger");
            Driver memory driverDetails = drivers[_account];
            driverDetails.rate = _newRate;
            drivers[_account] = driverDetails; 
        } else {
            require(isDriver(msg.sender), "Sender isn't a driver");
            Passenger memory passengerDetails = passengers[_account];
            passengerDetails.rate = _newRate;
            passengers[_account] = passengerDetails; 
        }
    }

    function isDriver(address account) public view returns (bool) {
        return drivers[account].isDriver;
    }

    function isPassenger(address account) public view returns (bool) {
        return passengers[account].isPassenger;
    }

    function getDriver(address account) public view returns (Driver memory) {
        return drivers[account];
    }

    function getPassenger(address account) public view returns (Passenger memory) {
        return passengers[account];
    }

    function getDriverRate(address account) public view returns (uint256) {
        return drivers[account].rate;
    }

    function getPassengerRate(address account) public view returns (uint256) {
        return passengers[account].rate;
    }

    function getDriverCounter(address account) public view returns (uint256) {
        return drivers[account].counterCourse;
    }

    function getPassengerCounter(address account) public view returns (uint256) {
        return passengers[account].counterCourse;
    }
}