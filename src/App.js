import React, { StrictMode } from "react";
import UseStateDemo from "./UseState";
import UseEffectDemo from "./UseEffectDemo";
import UseEffectWindowResize from "./UseEffectWindowResize";
import UseContext from "./context/UseContext";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback/UseCallback";
import UseReducer from "./UseReducer";
import UseTransition from "./UseTransition";
import UseDeferredValue from "./UseDeferredValue";
import UseLayoutEffect from "./UseLayoutEffect";
import UseDebugValue from "./UseDebugValue/UseDebugValue";

const App = () => {
  return (
    <StrictMode>
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
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <UseReducer />
      <hr />
      <UseTransition />
      <hr />
      <UseDeferredValue />
      <hr />
      <UseLayoutEffect />
      <hr />
      <UseDebugValue />
      <hr />
    </StrictMode>
  );
};

export default App;
