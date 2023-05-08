// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Arrays {
    //To dfine an array first you have to give a type of array like uint string etc
    //then round brackets that represents arrays and then name of arrays like below

    uint[2] numbers;
    //in this case we gave the a limit of numbers
    //dynamic size arrays
    string[] names;
    // in this case i didnt define the limit of arrays so 
     //then definning arrays same concepts like state variables you can declare arrays at initial stage or make constractot or function
// in this case i am going to use function method too define arrays

function defineArray() public {
    numbers=[10,20];
} 

     function getarray()public view returns(uint[2] memory){
        return numbers;
     } 
    function defineName()public {
        names = ["Ahmed","Ubaid"];
    }
    function getNames()public view returns(string[] memory){
        return names;
    }
}