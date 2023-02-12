"use client";

import { useState } from "react";

export const UserWithButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((state) => state + 1)}>INCREMENT</button>
      <h1>{count}</h1>
    </div>
  );
};
