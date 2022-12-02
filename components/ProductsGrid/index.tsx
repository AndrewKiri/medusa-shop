import React, { Fragment } from "react";
import { useProducts } from "medusa-react";
import ProductCard from "../ProductCard";

const ProductsGrid = (): JSX.Element | null => {
  const { products, isLoading } = useProducts();
  const shouldShowProducts = products && products?.length;

  if (isLoading) return <div>loading...</div>;

  return shouldShowProducts ? (
    <div className="h-full grid grid-cols-4 grid-rows-2 gap-x-3 gap-y-3 p-3">
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>
      ))}
    </div>
  ) : null;
};

export default ProductsGrid;
