import React from "react";
import Link from "next/link";

function Button() {
  return (
    <div className="p-6">
      <Link href="/about">
        <button className="bg-yellow-300 text-black font-bold py-3 px-6 rounded-md border-2 border-black shadow-[4px_4px_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] transition-transform duration-150">
          Learn More
        </button>
      </Link>
    </div>
  );
}

export default Button;
