var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};

var TBHfoodToken = artifacts.require("./contracts/TBHfoodToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TBHfoodToken);
};
