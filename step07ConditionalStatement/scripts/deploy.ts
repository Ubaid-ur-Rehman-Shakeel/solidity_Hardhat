import { ethers } from "hardhat";
import { ConditionalStatement, ConditionalStatement__factory } from "../typechain-types";

async function main() {
  const ConditionalStatement : ConditionalStatement__factory= await ethers.getContractFactory("ConditionalStatement");
  const statement :ConditionalStatement = await ConditionalStatement.deploy();
  await statement.deployed();
  console.log("conditional Statement is deployed to address :",statement.address);
  
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
