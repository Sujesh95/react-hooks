import React, { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const previousCount = usePrevious(count);

  return (
    <>
      <h2>usePrevious demo</h2>
      <div>
        {count} - {previousCount}
      </div>
      <button onClick={() => setCount((i) => i + 1)}>Increment</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default PreviousComponent;
