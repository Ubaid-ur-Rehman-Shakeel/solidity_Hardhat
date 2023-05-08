// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Function {
    uint age = 10;
    // getting the value of age using get function
    // get function has any name

    function getAge()public view returns(uint){
        return age ; 
    }
    //The above function is the example of getter function where we get the value of age 

    // Modifying The value of age using setter functionn
    // set function has any name 
     function setAge(uint newage ) public {
        age = newage;
     }
     // The above function is the example of setter function
     
}
