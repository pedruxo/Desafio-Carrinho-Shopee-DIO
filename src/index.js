import { createItem } from "./item.js";
import { createCart } from "./cart.js";

async function main() {
  const cart = await createCart();

  const celular = await createItem("Celular Xiaomi", 1200, 1);
  const capa = await createItem("Capa de Celular", 50, 2);
  const fone = await createItem("Fone Bluetooth", 200, 1);

  await cart.addItem(celular);
  await cart.addItem(capa);
  await cart.addItem(fone);

  await cart.showCart();

  await cart.removeItem("Capa de Celular");
  await cart.showCart();
}

main();