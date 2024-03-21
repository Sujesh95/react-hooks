import React, { useMemo, useState, useTransition } from "react";

const UseTransition = () => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
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
      {isPending
        ? "Loading..."
        : list.map((item) => <span index={item}>{item}</span>)}
    </>
  );
};

export default UseTransition;
