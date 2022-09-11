const ZCoin = artifacts.require("ZCoin");

module.exports = (deployer) => {
  deployer.deploy(ZCoin, 100000);
};
