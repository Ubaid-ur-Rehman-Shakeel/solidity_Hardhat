import { ethers } from "hardhat";
import { expect } from "chai";

describe("ConditionalStatement", function () {
  it("Should check the value and update valueChecker accordingly", async function () {
    const ConditionalStatement = await ethers.getContractFactory("ConditionalStatement");
    const conditionalStatement = await ConditionalStatement.deploy();
    await conditionalStatement.deployed();

    // Check the value when it's greater than 0
    await conditionalStatement.checkValue(10);
    expect(await conditionalStatement.valueChecker()).to.equal("Value is Greeter than 0");

    // Check the value when it's equal to 0
    await conditionalStatement.checkValue(0);
    expect(await conditionalStatement.valueChecker()).to.equal("Value is Equal to 0");
  });
});
