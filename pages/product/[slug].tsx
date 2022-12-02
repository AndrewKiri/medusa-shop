import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Product: {slug}</p>;
};

export default Product;
