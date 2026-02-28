"use client"; // ✅ Cette ligne transforme le composant en Client Component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clics : {count}
    </button>
  );
}