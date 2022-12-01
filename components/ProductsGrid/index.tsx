import React, { Fragment } from "react";
import { useProducts } from "medusa-react";
import ProductCard from "../ProductCard";

const ProductsGrid = (): JSX.Element | null => {
  const { products, isLoading } = useProducts();
  const shouldShowProducts = products && products?.length;

  if (isLoading) return <div>loading...</div>;

  return shouldShowProducts ? (
    <>
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard product={product} />
        </Fragment>
      ))}
    </>
  ) : null;
};

export default ProductsGrid;
