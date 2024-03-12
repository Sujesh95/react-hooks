import React from "react";
import UseStateDemo from "./UseState";
import UseEffectDemo from "./UseEffectDemo";
import UseEffectWindowResize from "./UseEffectWindowResize";
import UseContext from "./context/UseContext";
import UseRef from "./UseRef";

const App = () => {
  return (
    <>
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <UseEffectWindowResize />
      <hr />
      <UseContext />
      <hr />
      <UseRef />
      <hr />
    </>
  );
};

export default App;
