import React, { useCallback, useEffect, useState } from "react";

const UseEffectWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>UseEffect window resize</h1>
      <p>{windowWidth}</p>
    </div>
  );
};

export default UseEffectWindowResize;
