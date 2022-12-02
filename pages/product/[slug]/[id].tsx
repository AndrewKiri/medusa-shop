import { useState, useEffect } from "react";
import Link from "next/link";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useProduct } from "medusa-react";
import { ProductVariant } from "@medusajs/medusa";
import Select from "../../../components/Select";
import QuantitySelector from "../../../components/QuantitySelector";
import { useCartStore } from "../../../store";

const INITIAL_QUANTITY = 1;

const ProductPage = observer(() => {
  const cartStore = useCartStore();
  const router = useRouter();
  const { id } = router.query;
  const { product } = useProduct(id as string);
  const [selectedQuantity, setSelectedQuantity] = useState(INITIAL_QUANTITY);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>();
  const [price, setPrice] = useState("--");

  useEffect(() => {
    console.log(JSON.parse(JSON.stringify(cartStore.items)));
  }, [cartStore.items]);

  return product ? (
    <>
      <Head>
        <title>Medusa Store</title>
        <meta name="description" content="Medusa store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center py-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Medusa Logo" width={72} height={16} />
          </Link>
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="relative w-[50%]">
            <Image src={product?.images[0].url} alt={product.title} fill />
          </div>
          <div className="flex flex-col grow p-8">
            <span className="text-xl font-semibold">{product.title}</span>
            <span className="text-base mt-4">{price}</span>
            <span className="text-sm mt-8">{product.description}</span>
            <Select
              className="mt-12"
              variants={product?.variants}
              onChange={(option) => {
                setSelectedVariant(option?.data);

                const price = option?.data?.prices[0];
                setPrice(`€ ${(price?.amount / 100).toFixed(2)}`);
              }}
            />
            <QuantitySelector
              initialQuantity={INITIAL_QUANTITY}
              onChange={setSelectedQuantity}
              className="mt-4"
            />
            <button
              onClick={() => {
                if (selectedVariant) {
                  cartStore.add(selectedQuantity, selectedVariant);
                }
              }}
              className={`inline-block mt-4 py-2 px-4 ${
                selectedVariant
                  ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white"
                  : "bg-indigo-100 cursor-not-allowed text-indigo-300"
              }`}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
});

export default ProductPage;
