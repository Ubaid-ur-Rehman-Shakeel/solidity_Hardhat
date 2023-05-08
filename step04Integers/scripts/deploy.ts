import { ethers } from "hardhat";
import { Integers,Integers__factory } from "../typechain-types";
async function main() {
 const Integers : Integers__factory = await ethers.getContractFactory("Integers")
 const integer :Integers = await Integers.deploy();
 await integer.deployed();
 console.log("Integers deployed with address :",integer.address);
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
