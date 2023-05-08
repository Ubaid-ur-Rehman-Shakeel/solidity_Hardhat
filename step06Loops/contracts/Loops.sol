// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

pragma solidity ^0.8.0;

contract Loops {
    uint256[] public myArray;

    function setArray() external {

        //below code is the example of For loop
        for (uint256 i = 1; i <= 5; i++) {
            myArray.push(i);
        }


        // below code is the example of While loop


        //     uint256 i = 1;
        //     while (i <= 5) {
        //     myArray.push(i);
        //     i++;
        // }

        //below code is tHe Example of Do While Loop

        
        // uint256 i = 1;
        // do {
        //     myArray.push(i);
        //     i++;
        // } while (i <= 5);
    }

    function getArray() public view returns (uint256[] memory) {
        return myArray;
    }
}
