// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Boolean{
    // To define a bolean dtatype in solidity we bool keyword
    bool public value;
    // The value of {value} is false 
    // In below line we make a function of checkValue which taking one parameter of type uint returns type bool 
    function checkValue(uint newValue) public returns(bool){
        // In below line we are checking that the value of our parameter is greter than 100 or not by using if-else condition
        if(newValue>100){
            // if upper condition become true then the bolck of code inside if condition will run and change the value to true and return it
            value = true;
            return value;
        }else{
            //if upper condition becomes false then the th block  else condition will run and change the value to false and return it
            value = false;
            return value;
        }
    }
}