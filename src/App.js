import React from "react";
import UseStateDemo from "./UseState";
import UseEffectDemo from "./UseEffectDemo";
import UseEffectWindowResize from "./UseEffectWindowResize";

const App = () => {
  return (
    <>
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <UseEffectWindowResize />
      <hr />
    </>
  );
};

export default App;
