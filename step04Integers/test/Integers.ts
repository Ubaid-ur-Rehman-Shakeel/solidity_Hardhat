import { ethers } from "hardhat";
import { expect } from "chai";

describe("Integers", function () {
  it("Should return the correct unsigned integer", async function () {
    const Integers = await ethers.getContractFactory("Integers");
    const instance = await Integers.deploy();
    await instance.deployed();
    expect(await instance.getnumber()).to.equal(10000);
  });
});