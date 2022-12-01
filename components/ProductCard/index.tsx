import React from "react";
import { Product } from "@medusajs/medusa";

export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.title}</div>;
};

export default ProductCard;
