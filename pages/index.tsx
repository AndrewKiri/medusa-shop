import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductsGrid from "../components/ProductsGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Medusa Store</title>
        <meta name="description" content="Medusa store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full h-full px-24">
        <div className="flex justify-center py-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Medusa Logo" width={72} height={16} />
          </Link>
        </div>
        <ProductsGrid />
      </div>
    </>
  );
}
