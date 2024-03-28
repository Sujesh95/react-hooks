import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );

      const json = await response.json();
      setData(json);
    };

    fetchData();

    return () => {
      console.log("return from resource type");
    };
  }, [resourceType]);

  return (
    <div>
      <h2>useEffect demo</h2>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h3>{resourceType}</h3>
      {data.slice(0, 3).map((d) => {
        return (
          <p key={d.id}>
            {resourceType === "comments" || resourceType === "posts"
              ? d.body
              : d.name}
          </p>
        );
      })}
    </div>
  );
};

export default UseEffectDemo;
