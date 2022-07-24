const Storage = artifacts.require("Storage");
// require("chai")
//   .use(require("chai-as-promised"))
//   .should();
var chai = require("chai");
const { assert } = require("console");
contract("Storage", (accounts) => {
  let storage;
  before(async () => {
    storage = await Storage.deployed();
  });
  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = storage.address;

      chai.assert.notEqual(address, "");
      chai.assert.notEqual(address, null);
      chai.assert.notEqual(address, undefined);
      chai.assert.notEqual(address, 0x0);
    });
  });
  describe("storage", async () => {
    it("Updates fileHash", async () => {
      let fileHash;
      fileHash = "abc123";
      await storage.set(fileHash);
      const result = await storage.get();
      chai.assert.equal(result, fileHash);
    });
  });
});
