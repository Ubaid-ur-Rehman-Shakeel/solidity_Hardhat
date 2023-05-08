import { ethers } from "hardhat";

async function main(){
    const Function = await ethers.getContractFactory("Function");
    const functions = await Function.deploy();
    console.log((await functions).address);
        
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  