"use client";
import React, { ReactElement } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar(): ReactElement {
  return (
    <div className="sticky top-0 flex items-center justify-between text-white h-16 mb-4 backdrop-filter backdrop-blur-lg">
      <Link
        href="/"
        className="decoration-none h-8 w-max flex items-center justify-center rounded-md border border-white px-2 text-white no-underline hover:scale-95 transition-all duration-150"
      >
        <ChevronLeft />
        Home
      </Link>

      <Image
        src={"/logo.png"}
        alt={"Logo"}
        width={40}
        height={40}
        className="h-10 w-10 object-fit object-bottom rounded-full"
      />
    </div>
  );
}
