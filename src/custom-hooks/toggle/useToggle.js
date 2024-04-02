import { useState } from "react";

const useToggle = (defaultValue) => {
  const [toggle, setToggle] = useState(defaultValue);

  const toggler = (value) => {
    setToggle((prev) => (typeof value === "boolean" ? value : !prev));
  };

  return [toggle, toggler];
};

export default useToggle;
