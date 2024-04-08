import { useRef } from "react";

const usePrevious = (value) => {
  const currentValue = useRef(value);
  const previousValue = useRef();

  if (currentValue.current != value) {
    previousValue.current = currentValue.current;
    currentValue.current = value;
  }

  return previousValue.current;
};

export default usePrevious;
