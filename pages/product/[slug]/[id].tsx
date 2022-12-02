import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useProduct } from "medusa-react";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product } = useProduct(id as string);

  return product ? (
    <>
      <Head>
        <title>Medusa Store</title>
        <meta name="description" content="Medusa store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center py-2">
          <Image src="/logo.svg" alt="Medusa Logo" width={72} height={16} />
        </div>
        <div className="flex flex-row w-full h-full">
          <div className="relative w-[50%]">
            <Image src={product?.images[0].url} alt={product.title} fill />
          </div>
          <div className="flex flex-col grow p-8">
            <span className="text-xl font-semibold">{product.title}</span>
            <span className="text-base mt-4">price</span>
            <span className="text-sm mt-8">{product.description}</span>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Product;
