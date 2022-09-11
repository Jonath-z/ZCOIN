const { accounts, contract, web3 } = require("@openzeppelin/test-environment");
const { BigNumber } = require("bignumber.js");

const [deployer, userMinter, userBuyer, userBuyer2] = accounts;

const MyContract = contract.fromArtifact("ZCoin");

describe("NFT", function () {
  beforeEach(async function () {
    this.contract = await MyContract.new({ from: deployer });
  });

  it("check balance ", async function () {
    const balance = await this.contract.balance(accounts[0]);
    console.log({ balance });
  });
});
