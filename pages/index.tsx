import Head from "next/head";
import Image from "next/image";
import ProductsGrid from "../components/ProductsGrid";

export default function Home() {
  return (
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
        <ProductsGrid />
      </div>
    </>
  );
}
