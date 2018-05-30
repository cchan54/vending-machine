const vendingMachine = require("../src/vending-machine");
const inventory = require("../__mocks__/inventory");
const coins = require("../__mocks__/coins");
const appleMachine = new vendingMachine({ inventory, coins });

describe("vendingMachine", () => {
  describe("Print Inventory", () => {
    it("should return list of inventory.", () => {
      const result = appleMachine.printInventory();
      expect(result).toEqual(inventory);
    });
  });
});
