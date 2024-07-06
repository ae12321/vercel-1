import Link from "next/link";
import React from "react";

function ContactPgae() {
  return (
    <div>
      <h1>ContactPgae</h1>
      <Link href={"/"} className="text-blue-500 underline">
        back to home
      </Link>
    </div>
  );
}

export default ContactPgae;
