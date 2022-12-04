import Head from "next/head";
import ProductsGrid from "../components/ProductsGrid";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Medusa Store</title>
        <meta name="description" content="Medusa store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full h-full">
        <Header />
        <ProductsGrid />
      </div>
    </>
  );
}
