export async function createItem(name, price, quantity=1) {
    return {
        name,
        price,
        quantity,

        async getSubtotal() {
            return this.price * this.quantity;
        }
    };
}