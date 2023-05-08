import { ethers } from "hardhat";
import { Arrays,Arrays__factory } from "../typechain-types";
async function main() {
  const Arrays : Arrays__factory =  await ethers.getContractFactory("Arrays");
  const arrays : Arrays = await Arrays.deploy();
  await arrays.deployed();
  console.log("Address of deployed arrays is :",arrays.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
