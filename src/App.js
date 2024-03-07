import React, { useState } from "react";

const setInitialState = () => {
  console.log("called multiple times");
  return 4;
};

const App = () => {
  const [count, setCount] = useState(setInitialState);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <button
        style={{
          display: "inline-block",
          width: "20px",
          margin: "20px",
          backgroundColor: "red",
          border: "none",
        }}
        onClick={decrementCounter}>
        -
      </button>
      <span>{count}</span>
      <button
        style={{
          display: "inline-block",
          width: "20px",
          margin: "20px",
          backgroundColor: "green",
          border: "none",
        }}
        onClick={incrementCounter}>
        +
      </button>
    </div>
  );
};

export default App;
