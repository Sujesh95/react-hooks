import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getNumbers = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + incrementor + 1,
        number + incrementor + 2,
      ];
    },
    [number]
  );

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={themeStyles}>
      <h1>useCallback demo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
      <List getItems={getNumbers} />
    </div>
  );
};

export default UseCallback;
