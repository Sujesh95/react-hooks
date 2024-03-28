import React, { useState, useRef, useLayoutEffect } from "react";

/* Execute synchronously between dom elements calculation (Layout) and painting the screen 
 so any changes related to DOM manipulation can be added here as it will be executed
 before DOM is painted.

 Most of the use cases will work with useEffect itself, so use that first and 
 only if useEffect is not working, use useLayoutEffect. 
*/
const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const buttonRef = useRef();
  const popupRef = useRef();

  useLayoutEffect(() => {
    if (!buttonRef.current || !popupRef.current) return;

    const { bottom } = buttonRef.current.getBoundingClientRect();
    popupRef.current.style.left = `${bottom + 25}px`;
  }, [show]);

  return (
    <div style={{ position: "relative" }}>
      <h2>useLayoutEffect demo</h2>
      <button ref={buttonRef} onClick={() => setShow((prev) => !prev)}>
        show popup
      </button>

      {show && (
        <div
          ref={popupRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "green",
            color: "white",
            width: "200px",
          }}>
          This is a popup
        </div>
      )}
    </div>
  );
};

export default UseLayoutEffect;
