import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const UseReducer = () => {
  const [name, setName] = useState("");

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { id: Date.now().toString(), name, complete: false },
    });
    setName("");
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
  };

  return (
    <>
      <h2>useReducer hook</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add todo</button>
      </form>

      {todos.map((todo) => {
        return (
          <div>
            <span
              style={{
                color: todo.complete ? "#AAA" : "#000",
                display: "inline-block",
                padding: "0 2rem",
              }}>
              {todo.name}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducer;
