import React from "react";
import ThemeContextProvider, { useTheme, useToggleTheme } from "./ThemeContext";

const ThemedDiv = () => {
  const dark = useTheme();
  const toggleTheme = useToggleTheme();

  const getStyle = () => {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: dark ? "#ccc" : "#333",
      padding: "2rem",
      margin: "2rem 1rem",
      width: "15vw",
    };
  };

  return (
    <>
      <div style={getStyle()}>{`${dark ? "Dark" : "Light"} themed div`}</div>
      <div>
        <button onClick={toggleTheme}>{`Toggle to ${
          dark ? "light" : "dark"
        } theme`}</button>
      </div>
    </>
  );
};

const UseContext = () => {
  return (
    <ThemeContextProvider>
      <h1>useContext demo</h1>
      <ThemedDiv />
    </ThemeContextProvider>
  );
};

export default UseContext;
