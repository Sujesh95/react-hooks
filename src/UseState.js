import React, { useState } from "react";

const setInitialState = () => {
  console.log("called multiple times");
  return 4;
};

const UseStateDemo = () => {
  const [count, setCount] = useState(setInitialState);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1> useState demo </h1>
      <button onClick={decrementCounter}>-</button>
      <span>{count}</span>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default UseStateDemo;
