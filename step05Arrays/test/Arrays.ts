import { ethers } from "hardhat";
import { expect } from "chai";

describe("Arrays", function () {
  it("Should define and get the numbers array correctly", async function () {
    const Arrays = await ethers.getContractFactory("Arrays");
    const instance = await Arrays.deploy();
    await instance.deployed();

    await instance.defineArray();
    expect(await instance.getarray()).to.deep.equal([10, 20]);
  });

  it("Should define and get the names array correctly", async function () {
    const Arrays = await ethers.getContractFactory("Arrays");
    const instance = await Arrays.deploy();
    await instance.deployed();

    await instance.defineName();
    expect(await instance.getNames()).to.deep.equal(["Ahmed", "Ubaid"]);
  });
});
