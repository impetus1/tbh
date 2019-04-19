pragma solidity ^0.4.20;

contract TBHfoodToken {
    address public donor;
    address public rescuer;
    uint public weight;
    
    enum State { InTransit, Received, Aborted }
    State public state;
    
    event Aborted();
    event FoodOnItsWay();
    event ItemReceived();
    
    modifier onlyRescuer() {
        require(msg.sender == rescuer);
        _;
    }

    modifier onlyDonor() {
        require(msg.sender == donor);
        _;
    }
    
    //The request to donate the food is created 
    function Donate() public payable 
    onlyDonor {
        weight = msg.value;
        donor = msg.sender;
        state = State.InTransit;
        FoodOnItsWay();

    }
    
    //Ordered is cancelled
    function Abort() onlyDonor 
        public
        onlyDonor
    {
        state = State.Aborted;
        Aborted();
    }
    //Order delivered to the rescuer
    function orderDelivered() public payable
    onlyRescuer {
        state = State.Received;
        rescuer.transfer(weight);
        donor.transfer(weight);
        ItemReceived();
    }
    }
