export async function createCart() {
    const items = [];

    return {
        async addItem(item) {
            const existing = items.find(i => i.name === item.name);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                items.push(item);
            }
        },

        async removeItem(name) {
            const index = items.findIndex(i => i.name === name);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        async getTotal() {
            let total = 0;
            for (const item of items) {
                total += await item.getSubtotal();
            }
            return total;
        },

        async showCart() {
            if (items.length === 0) {
                console.log("🛒 Carrinho vazio!");
                return;
            }

            console.log("\n🛒 Seu carrinho:");
            for (const item of items) {
                console.log(`- ${item.name} (x${item.quantity}): R$ ${(await item.getSubtotal()).toFixed(2)}`);
            }
            console.log(`\n💰 Total: R$ ${(await this.getTotal()).toFixed(2)}\n`);
        }
    };
}