export default class Product {
    constructor(name, price, qty) {
        (this.name = name), (this.price = price), (this.qty = qty);
    }
    sell() {
        this.qty--;
        console.log(this.qty);
    }
    add() {
        this.qty++;
    }
}
