import React from "react";
import useToggle from "./useToggle";

const Comp = () => {
  const [toggle, setToggle] = useToggle(false);

  return (
    <>
      <h2>useToggle hook</h2>
      <button onClick={setToggle}>Toggle</button>
      <button onClick={() => setToggle(true)}>true</button>
      <button onClick={() => setToggle(false)}>false</button>
      <div>{`${toggle}`}</div>
    </>
  );
};

export default Comp;
