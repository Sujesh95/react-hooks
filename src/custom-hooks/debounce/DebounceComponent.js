import React, { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceComponent = () => {
  const [name, setName] = useState("");
  useDebounce(() => alert(name), 500, [name]);

  return (
    <>
      <h2>useDebounce custom hook</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default DebounceComponent;
