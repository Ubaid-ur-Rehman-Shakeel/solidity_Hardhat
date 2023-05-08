import { ethers } from "hardhat";
// import { Varibles, Varibles__factory } from "../typechain-types";
async function main() {
 
  const Variables=ethers.getContractFactory("Variables")
  const variables=(await Variables).deploy()
  console.log((await variables).address)
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
