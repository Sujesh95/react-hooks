import React, { useState } from "react";
import useTimeout from "./useTimeout";

const Comp = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(100), 2000);

  return (
    <>
      <h2>useTimeout hook</h2>
      <div>{count}</div>
      <button onClick={() => setCount((p) => p + 1)}>Increment</button>
      <button onClick={clear}>Clear timeout</button>
      <button onClick={reset}>Reset timeout</button>
    </>
  );
};

export default Comp;
