# In this we are now going to leran about variables
Variables in programming refer to storage location that can contain values. These values can be changed during runtime. The variable can be used at multiple places within code and they will all refer to the value stored within it
# Types of variables
There are two types of Variables in solidity
# State Variable
# Loacal Variable 

# State Variable 
 Variables declared in a contract that are not within any function are called state variables.Sate Variables are permenant and stored in blockchain contract storage

# Local Variables 
declared in a function and used in the function they are referenced in. Local variables are temporary and not stored on the blockchain in contract storage


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
