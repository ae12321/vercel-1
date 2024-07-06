"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center w-[200px]">
      <span className="text-3xl font-bold">{count}</span>
      <button className="bg-blue-500 rounded px-4 py-2 text-white mt-4" onClick={() => setCount((p) => p + 1)}>
        increment
      </button>
    </div>
  );
}
