import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/about" className="text-xl text-blue-500 underline">
        about
      </Link>
    </div>
  );
}

export default HomePage;
