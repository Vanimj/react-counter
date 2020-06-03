import React, { useState } from "react";
import logo from "./logo.svg";
//import "./index.css";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button className="btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}

export default App;
