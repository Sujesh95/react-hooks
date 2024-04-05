import { useEffect, useRef } from "react";

const useUpdateEffect = (cb, deps) => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) {
      cb();
    }
    ref.current = true;
  }, deps);
};

export default useUpdateEffect;
