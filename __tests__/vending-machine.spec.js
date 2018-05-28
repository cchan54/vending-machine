const VendingMachine = require("../src/vending-machine");
const inventory = require("../__mocks__/inventory");
const coins = require("../__mocks__/coins");
const newVendingMachine = new VendingMachine({ inventory, coins });

describe("VendingMachine", () => {
  describe("inventory", () => {
    it("should return list of inventory", () => {
      const result = newVendingMachine.printInventory();
      expect(result).toEqual(inventory);
    });
  });
  describe("refill", () => {
    it("should refill an item by 10", () => {
      const result = newVendingMachine.refillItem({ item: "a1", quantity: 2 });
      expect(result).toEqual(17);
    });
  });
  describe("dispense change", () => {
    it("should show if amount paid is larger than price", () => {
      const result = () => {
        newVendingMachine.giveChange(3, 2);
      };
      expect(result).toThrowError;
    });
  });
});
