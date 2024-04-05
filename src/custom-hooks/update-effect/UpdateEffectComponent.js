import React, { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

const UpdateEffectComponent = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    alert(`This is from useUpdateEffect hook ${count}`);
  }, [count]);

  return (
    <>
      <h2>useUpdateEffect custom hook</h2>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

export default UpdateEffectComponent;
