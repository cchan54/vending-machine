module.exports = class vendingMachine {
  constructor({ inventory, coins }) {
    this.inventory = JSON.parse(JSON.stringify(inventory));
    this.coins = JSON.parse(JSON.stringify(coins));
  }

  printInventory() {
    return this.inventory;
  }

  refillInventory() {}
};
