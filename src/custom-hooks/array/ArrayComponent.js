import React from "react";
import useArray from "./useArray";

const ArrayComponent = () => {
  const [array, { update, filter, push, set, remove, clear }] = useArray([
    1, 2, 5, 12, 16, 23,
  ]);

  return (
    <>
      <h2>useArray custom hook demo</h2>
      <div>{array.join(",")}</div>
      <button onClick={() => update(3, 20)}>
        Update value in index 3 to 20
      </button>
      <button onClick={() => filter((x) => x < 10)}>
        Filter everything below 10
      </button>
      <button onClick={() => push(200)}>Add 200</button>
      <button onClick={() => set([1, 5])}>Set array</button>
      <button onClick={() => remove(4)}>Remove 4th element</button>
      <button onClick={clear}>Clear array</button>
    </>
  );
};

export default ArrayComponent;
