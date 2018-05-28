module.exports = class VendingMachine {
  constructor({ inventory, coins }) {
    this.inventory = JSON.parse(JSON.stringify(inventory));
    this.coins = JSON.parse(JSON.stringify(coins));
  }

  printInventory() {
    return this.inventory;
  }
  refillItem({ item, quantity }) {
    if (this.inventory[item] === undefined || typeof quantity !== "number") {
      throw new Error();
    }
    return (this.inventory[item].quantity += quantity);
  }
  restockCoins() {}

  restockInventory() {}

  giveChange(price, paid) {
    if (
      typeof price !== "number" ||
      typeof paid !== "number" ||
      typeof paid < price
    ) {
      throw new Error();
    } else {
      return paid - price;
    }
  }
};
