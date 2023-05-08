// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ConditionalStatement{
    string public valueChecker;
    // we are making function to set the of valueChecker throogh if else statement

    function checkValue(uint newValue) public{
        //in the below line we are checking that the new value is greeter than 0 or not
        string memory value;
        if(newValue>0){
            value = "Value is Greeter than 0";
        }else if(newValue == 0){
            value = "Value is Equal to 0";
        }else{
            value = "Value is less Than 0";
        }
        valueChecker=value;
    }

}
