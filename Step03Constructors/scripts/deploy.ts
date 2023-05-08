import { ethers } from "hardhat";
import { Constructors, Constructors__factory } from "../typechain-types";
async function main() {
    const Constructors : Constructors__factory = await ethers.getContractFactory("Constructors");
    const constructors : Constructors = await Constructors.deploy("Hello",10) 
    await constructors.deployed();
    console.log("Constructors has been deployed to address",constructors.address);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
