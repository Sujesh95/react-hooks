import React, { useMemo, useRef, useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([]);
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });

    // immediately sets the focus to the button as this is a high priority update
    buttonRef.current.focus();
  };

  /** Even if you use useMemo the render will be slow */
  //   const lists = useMemo(() => {
  //     const l = [];
  //     for (let i = 0; i < 20000; i++) {
  //       l.push(name);
  //     }
  //     return l;
  //   }, [name]);

  return (
    <>
      <h1>useTransition demo</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button ref={buttonRef}>Set focus</button>
      {isPending
        ? "Loading..."
        : list.map((item, index) => (
            <pre key={index}>{item && `<> ${item} <>`}</pre>
          ))}
    </>
  );
};

export default UseTransition;
