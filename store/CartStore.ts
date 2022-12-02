import { ProductVariant } from "@medusajs/medusa";
import { action, makeObservable, observable } from "mobx";

export interface CartItem {
  quantity: number;
  variant: ProductVariant;
}

export type CartItems = {
  [id: string]: CartItem;
};

export class CartStore {
  items: CartItems = {};

  add(quantity: number, variant: ProductVariant) {
    if (this.items[variant.id]) {
      const existingQuantity = this.items[variant.id].quantity ?? 0;

      this.items[variant.id].quantity = quantity + existingQuantity;
    } else {
      this.items[variant.id].quantity = quantity;
    }
  }

  remove(variant: ProductVariant) {}

  hydrate = (data: any) => {};

  constructor() {
    makeObservable(this, {
      items: observable,
      add: action.bound,
      remove: action.bound,
    });
  }
}
