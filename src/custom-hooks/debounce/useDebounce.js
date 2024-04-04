import { useEffect } from "react";
import useTimeout from "../timeout/useTimeout";

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(() => {
    reset();
  }, [reset, ...dependencies]);

  useEffect(() => {
    clear();
  }, []);
};

export default useDebounce;
