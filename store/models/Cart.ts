import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import { Product, ProductVariant } from "@medusajs/medusa";
import { CartItem } from "./CartItem";

export class Cart {
  uid: string = "";

  items = new Map<string, CartItem>();

  constructor() {
    makeAutoObservable(this);
    this.uid = nanoid();
  }

  get totalQuantity() {
    return Array.from(this.items.values()).reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  }

  add(quantity: number, product: Product, variant: ProductVariant) {
    const existingQuantity = this.items.get(variant.id)?.quantity ?? 0;

    this.items.set(
      variant.id,
      new CartItem(quantity + existingQuantity, product, variant)
    );
  }

  remove(id: string) {
    console.log("removing:", id);
    this.items.delete(id);
  }
}
