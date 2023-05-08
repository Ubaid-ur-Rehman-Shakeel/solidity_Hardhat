import { ethers } from "hardhat";
import { Boolean,Bollean__factory } from "../typechain-types";

async function main() {
  const Boolean:Bollean__factory = await ethers.getContractFactory("Boolean");
  const boolean : Boolean = await Boolean.deploy();
  await boolean.deployed();
  console.log("Your Boolean is deployed to address:",boolean.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
