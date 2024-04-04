import React, { StrictMode } from "react";
import UseStateDemo from "./main-hooks/UseState";
import UseEffectDemo from "./main-hooks/UseEffectDemo";
import UseEffectWindowResize from "./main-hooks/UseEffectWindowResize";
import UseContext from "./main-hooks/context/UseContext";
import UseRef from "./main-hooks/UseRef";
import UseMemo from "./main-hooks/UseMemo";
import UseCallback from "./main-hooks/UseCallback/UseCallback";
import UseReducer from "./main-hooks/UseReducer";
import UseTransition from "./main-hooks/UseTransition";
import UseDeferredValue from "./main-hooks/UseDeferredValue";
import UseLayoutEffect from "./main-hooks/UseLayoutEffect";
import UseDebugValue from "./main-hooks/UseDebugValue/UseDebugValue";
import UseImperativeHandle from "./main-hooks/UseImperativeHandle";
import UseId from "./main-hooks/UseId";
import UseLocalStorage from "./custom-hooks/local-storage/Input";
import UseToggle from "./custom-hooks/toggle";
import TimeoutComponent from "./custom-hooks/timeout";
import DebounceComponent from "./custom-hooks/debounce/DebounceComponent";

const App = () => {
  return (
    <StrictMode>
      <h1 className="hooks-heading">Hooks</h1>
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
      <UseImperativeHandle />
      <hr />
      <UseId />
      <hr />
      <h1 className="hooks-heading">Custom hooks</h1>
      <UseLocalStorage />
      <hr />
      <UseToggle />
      <hr />
      <TimeoutComponent />
      <hr />
      <DebounceComponent />
    </StrictMode>
  );
};

export default App;
