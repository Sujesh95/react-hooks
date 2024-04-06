import { useState } from "react";

const useArray = (initialValue) => {
  const [array, setArray] = useState(initialValue);

  const push = (value) => {
    setArray((prev) => [...prev, value]);
  };

  const update = (index, value) => {
    setArray((prev) => [
      ...prev.slice(0, index),
      value,
      ...prev.slice(index + 1, prev.length),
    ]);
  };

  const remove = (index) => {
    setArray((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
    ]);
  };

  const filter = (cb) => {
    setArray((prev) => prev.filter(cb));
  };

  const set = (newArr) => {
    setArray(newArr);
  };

  const clear = () => {
    setArray([]);
  };

  return [array, { update, filter, push, set, clear, remove }];
};

export default useArray;
