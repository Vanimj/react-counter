import React from "react";

var count = 0;

function handleIncrement() {
  return count++;
}

export default function ButtonPad() {
  return (
    <div>
      <button onClick={handleIncrement}>Up Button</button>
      <button>Down Button</button>
    </div>
  );
}
