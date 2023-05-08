import { ethers } from "hardhat";
import { expect } from "chai";

describe("Function", function () {
it("Should get age correctly", async function () {
const Function = await ethers.getContractFactory("Function");
const instance = await Function.deploy();
await instance.deployed();
expect(await instance.getAge()).to.equal(10);
});

it("Should set age correctly", async function () {
const Function = await ethers.getContractFactory("Function");
const instance = await Function.deploy();
await instance.deployed();
await instance.setAge(20);
expect(await instance.getAge()).to.equal(20);
});
});