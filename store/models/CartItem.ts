import { makeAutoObservable } from "mobx";
import { Product, ProductVariant } from "@medusajs/medusa";

export class CartItem {
  quantity: number;

  id: string;

  productId: string;

  sku: string;

  barcode: string;

  ean: string;

  upc: string;

  title: string;

  productTitle: string;

  constructor(quantity: number, product: Product, variant: ProductVariant) {
    makeAutoObservable(this);

    this.quantity = quantity;
    this.id = variant.id;
    this.productId = variant.product_id;
    this.sku = variant.sku;
    this.barcode = variant.barcode;
    this.ean = variant.ean;
    this.upc = variant.upc;
    this.title = variant.title;
    this.productTitle = product.title;
  }
}
