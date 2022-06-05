import React from "react";

import "./App.css";

export default function App(): React.ReactElement {
  const [count, setCount] = React.useState<number>(0);

  return <div className="App">
    <button
      onClick={() => setCount(prev => prev + 1)}
    >+</button>
    <h2>Counter: {count}</h2>
    <button
      onClick={() => setCount(prev => prev - 1)}
    >-</button>
  </div>;
}