// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Integers{
    // Two Types of Integers 
    //Signed Integers
    int age = 1000;
    int _age = -10000000;
    //unsigned Integers
    uint number = 10000;
    //if we try too give him negative value then they will give us eror 
    //uint _number = -01099992;


    function getnumber()public view returns(uint){
        return number;
    }
}