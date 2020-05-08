// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");
var CustomERC721Token = artifacts.require("./CustomERC721Token.sol");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier)
      .then(() => {
        return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
      });
};
