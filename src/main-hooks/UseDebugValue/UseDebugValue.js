import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const UseDebugValue = () => {
  const [firstName, setFirstName] = useLocalStorage("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <h2> useDebugValue hook </h2>
      First:{" "}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last:
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
};

export default UseDebugValue;
