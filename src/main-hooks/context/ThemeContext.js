import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  dark: false,
});

export const ThemeUpdateContext = createContext({
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useToggleTheme = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
