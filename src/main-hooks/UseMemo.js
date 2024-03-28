import React, { useEffect, useMemo, useState } from "react";

const slowFunction = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Adding useMemo to prevent computing the complex logic every time component is rendered
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Adding useMemo to prevent creating new object on every render
  // rather than reference the same one and only create a new one if the 'dark' changes
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("useMemo: Theme styles object reference changed");
  }, [themeStyles]);

  return (
    <>
      <h2>useMemo demo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}> Change theme </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemo;
