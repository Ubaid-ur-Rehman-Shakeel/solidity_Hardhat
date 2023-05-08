// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Variables {
    // below variables are the example of State Varibles
    
    string name;
    // ways to initialize state varibles
    // initialize while declaring varibles
    // like string name = "Ubaid"
    //second way to initialize the variablesis making a constructor

    constructor() {
        name = "Ubaid";
    }

    // third way to initialize state variable is making a function
    function setName() public {
        name = "Ahmed";
    }
    // now start with local variables
    //local varibles are defined in function 
    function local() pure public returns(uint){
        uint age = 10 ;
        return age;
    }
    // In this function we declared a age variable and return its value 
}