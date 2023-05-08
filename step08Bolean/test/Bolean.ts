import { ethers } from "hardhat";
import { expect } from "chai";

describe("Boolean", function () {
it("Should return false if the parameter is less than or equal to 100", async function () {
const Boolean = await ethers.getContractFactory("Boolean");
const boolean = await Boolean.deploy();
await boolean.deployed();
expect(await boolean.value()).to.equal(false);

const checkValueTx = await boolean.checkValue(50);

// wait until the transaction is mined
await checkValueTx.wait();

expect(await boolean.value()).to.equal(false);
});
it("Should return true if the parameter is greater than 100", async function () {
  const Boolean = await ethers.getContractFactory("Boolean");
  const boolean = await Boolean.deploy();
  await boolean.deployed();
  expect(await boolean.value()).to.equal(false);

const checkValueTx = await boolean.checkValue(150);

// wait until the transaction is mined
await checkValueTx.wait();

expect(await boolean.value()).to.equal(true);
});
});