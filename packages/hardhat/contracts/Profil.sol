// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Profil {

    struct Driver {
        bool isDriver;          
        uint256 rate;           // Driver rate 
        string carAssetUrl;      // Car image and description ie number of seats available, pointing towards storacha
        string infoAssetUrl;     // Driver image, name , age pointing towards storacha database
        uint256 counterCourse;
        string zkPassport; 
    }

   struct Passenger {
        bool isPassenger;          
        uint256 rate;           // Passenger rate 
        string infoAssetUrl;     // Passenger image, name , age pointing towards storacha database
        uint256 counterCourse;
        string zkPassport; 
    }
    

    event DriverAdded(address indexed account);
    event DriverRemoved(address indexed account);

    event PassengerAdded(address indexed account); 
    event PassengerRemoved(address indexed accont);

    //Roles.Role private drivers;
    mapping(address => Driver) private drivers;

    //Roles.Role private passengers: 
    mapping(address => Passenger) private passengers; 

    // Define a modifier that checks to see if msg.sender has the appropriate role
    modifier onlyDriver() {
        require(isDriver(msg.sender),"Sender isn't a driver");
        _;
    }

    modifier onlyPassenger() {
        require(isPassenger(msg.sender), "Sender isn't a passenger"); 
        _;
    }

    /**
    * @dev Checks if given address is a driver
    *
    */
    function isDriver(address account) public view returns (bool) {
        return drivers[account].isDriver;
    }

    /**
    * @dev Checks if given address is a passenger
    *
    */
    function isPassenger(address account) public view returns (bool) {
        return passengers[account].isPassenger;
    }


    /**
    * @dev Gets the Driver address
    *
    */
    function getDriver(address account) 
    public 
    view 
    returns (Driver memory) 
    {
        return drivers[account];
    }

    /**
    * @dev Gets the Passenger address
    *
    */
    function getPassenger(address account) 
    public 
    view 
    returns (Passenger memory) 
    {
        return passengers[account];
    }


    /**
    * @dev Gets the Driver rate 
    *
    */
    function getDriverRate(address account)
    public 
    view
    returns (uint256)
    {
        return drivers[account].rate;
    }


    /**
    * @dev Gets the Passenger rate 
    *
    */
    function getPassengerRate(address account)
    public 
    view
    returns (uint256)
    {
        return passengers[account].rate;
    }

        /**
    * @dev Gets the Driver counter 
    *
    */
    function getDriverCounter(address account)
    public 
    view
    returns (uint256)
    {
        return drivers[account].counterCourse;
    }


    /**
    * @dev Gets the Driver counter 
    *
    */
    function getPassengerCounter(address account)
    public 
    view
    returns (uint256)
    {
        return passengers[account].counterCourse;
    }


    //Only driver function that is a owner de la rider


    /**
    * @dev Adds driver
    *
    */
    function addDriver(uint256 _startingRate, string memory _carAssetUrl, string memory _profileAssetUrl) 
    public 
    {
        Driver memory driverDetails;
        driverDetails.isDriver = true;
        driverDetails.counterCourse = 0; 
        driverDetails.rate = _startingRate;
        driverDetails.carAssetUrl = _carAssetUrl;
        driverDetails.infoAssetUrl = _profileAssetUrl;
        drivers[msg.sender] = driverDetails;
        emit DriverAdded(msg.sender);
    }


    /**
    * @dev Adds Passenger
    *
    */
    function addPassenger(uint256 _startingRate, string memory _profileAssetUrl) 
    public 
    {
        Passenger memory passengerDetail;
        passengerDetail.isPassenger = true;
        passengerDetail.counterCourse = 0; 
        passengerDetail.rate = _startingRate;
        passengerDetail.infoAssetUrl = _profileAssetUrl;
        passengers[msg.sender] = passengerDetail;
        emit PassengerAdded(msg.sender);
    }

    /**
    * @dev Removes Passenger
    *
    */
    function removePassenger() 
    public
    virtual
    onlyPassenger
    {
        delete passengers[msg.sender];
        emit PassengerRemoved(msg.sender);
    }

    /**
    * @dev Removes driver
    *
    */
    function removeDriver() 
    public
    virtual
    onlyDriver
    {
        delete drivers[msg.sender];
        emit DriverRemoved(msg.sender);
    }


    /**
    * @dev Allows driver to update rate of the passengers
    *
    */
    function updateRateDriver(uint256 _newRate, address _driver) 
    public 
    virtual
    onlyPassenger()
    {
        Driver memory driverDetails = drivers[_driver];
        driverDetails.rate = _newRate;
        drivers[_driver] = driverDetails; 
    }

     /**
    * @dev Allows passenger to update rate of the drivers
    *
    */
    function updateRatePassenger(uint256 _newRate, address _passenger) 
    public 
    virtual
    onlyDriver()
    {
        Passenger memory passengerDetail = passengers[_passenger];
        passengerDetail.rate = _newRate;
        passengers[_passenger] = passengerDetail; 
    }
}