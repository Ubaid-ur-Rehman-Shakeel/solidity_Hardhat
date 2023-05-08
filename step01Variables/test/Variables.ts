import { ethers } from "hardhat";
import { expect } from "chai";

describe("Variables", function () {
  it("Should initialize state variables properly", async function () {
    const Variables = await ethers.getContractFactory("Variables");
    const variables = await Variables.deploy();
    await variables.deployed();
    expect(await variables.name()).to.equal("Ubaid");

    await variables.setName();

    expect(await variables.name()).to.equal("Ahmed");
  });

  it("Should define and return local variables correctly", async function () {
    const Variables = await ethers.getContractFactory("Variables");
    const variables = await Variables.deploy();
    await variables.deployed();
    expect(await variables.local()).to.equal(10);
  });
});
