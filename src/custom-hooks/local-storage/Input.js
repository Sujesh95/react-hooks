import React from "react";
import useLocalStorage from "./useLocalStorage";

const Input = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", () => "");

  return (
    <div style={{ display: "flex", flexDirection: " column", rowGap: 10 }}>
      <h2>useLocalStorage hook</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
