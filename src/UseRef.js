import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const previousName = useRef(null);

  useEffect(() => {
    // Since this assignment doesn't cause a rerender, we are able to get the previous state in JSX
    previousName.current = name;

    console.log(
      "Logging ref value immediately after assignment",
      previousName.current
    );
  }, [name]);

  console.log("Logging ref value", previousName.current);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>useRef Demo</h1>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and my previous name is {previousName.current}
      </div>
      <button onClick={focus}>Focus</button>
      <div> This component is rendered {renderCount.current} times</div>
    </>
  );
};

export default UseRef;
