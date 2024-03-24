import { useCallback, useDebugValue, useMemo, useState } from "react";

const useLocalStorage = (initialValue) => {
  const [storage, setStorage] = useState(initialValue);

  useDebugValue(storage);
  useDebugValue(storage, (s) => longRunningFunction(s));

  const localStorageValue = useMemo(() => {
    return localStorage.getItem("store");
  }, [storage]);

  const setLocalStorage = useCallback((value) => {
    localStorage.setItem("store", value);
    setStorage(value);
  }, []);

  return [localStorageValue, setLocalStorage];
};

export default useLocalStorage;

const longRunningFunction = (value) => {
  for (let i = 0; i < 3000000000; i++) {}
  return value;
};
