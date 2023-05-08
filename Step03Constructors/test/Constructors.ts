import { ethers } from "hardhat";
import { expect } from "chai";

describe("Constructors", function () {
  it("Should initialize state variables properly", async function () {
    const Constructors = await ethers.getContractFactory("Constructors");
    const constructors = await Constructors.deploy("Ubaid", 100);
    await constructors.deployed();
    expect(await constructors.getOwner()).to.equal("Ubaid");
    expect(await constructors.getSupply()).to.equal(100);
  });
});