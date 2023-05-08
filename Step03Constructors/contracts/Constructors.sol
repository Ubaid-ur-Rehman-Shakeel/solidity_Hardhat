// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Constructors{
    // Usually constructor is used to get the value of contract owner
    // but in this case we are now gonna use constructor to change a value or also take a address o owner

    // firstly define state varialble
    string owner;
    uint supply;

    constructor(string memory newOwner,uint newSupply){
        owner = newOwner;
        supply= newSupply;
        // we are taking two params of newOwner and newSupply and Then set them as a value of state variables
        // V.Imp That constructor calls once in the contract


        }
        function getOwner()public view returns(string memory) {
            return owner;
            
    }
    function getSupply()public view returns(uint){
        return supply;
    }
}
