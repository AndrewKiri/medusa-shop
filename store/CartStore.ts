import { makeAutoObservable } from "mobx";
import { Cart } from "./models/Cart";

export class CartStore {
  cart: Cart = new Cart();

  hydrate = (data: any) => {};

  constructor() {
    makeAutoObservable(this);
  }
}
