import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "../Cart";

const Header = () => {
  return (
    <div className="relative flex justify-center py-6">
      <Link href="/">
        <Image src="/logo.svg" alt="Medusa Logo" width={72} height={16} />
      </Link>
      <div className="absolute right-12 top-0 h-full">
        <div className="relative h-full flex items-center">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
