import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating items");
    setItems(getItems(10));
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
