import React from "react";
import kebabCase from "lodash/kebabCase";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@medusajs/medusa";

export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${kebabCase(product.title)}`}
      className="relative flex flex-col max-h-[420px] max-w-[280px] cursor-pointer"
    >
      <Image src={product.images[0].url} alt={product.title} fill />
      <div className="flex items-center justify-between absolute bottom-0 w-full px-3 py-2">
        <span>{product.title}</span>
        <span>xx DKK</span>
      </div>
    </Link>
  );
};

export default ProductCard;
