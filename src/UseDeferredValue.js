import React, { useDeferredValue, useMemo, useState } from "react";

const UseDeferredValue = () => {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(deferredName && <pre>{`<> ${deferredName} <>`}</pre>);
    }
    return l;
  }, [deferredName]);

  return (
    <>
      <h1>useDeferredValue demo</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {list}
    </>
  );
};

export default UseDeferredValue;
