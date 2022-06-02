import React from "react";

import "./App.css";
import InputField from "./components/InputField";

import ITodo from "./components/model";
import TodoList from "./components/TodoList";

// eslint-disable-next-line
export default function (): React.ReactElement {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (!todo) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo,
        isDone: false
      }
    ]);

    setTodo("");
  }

  return <div className="App">
    <span className="heading">Taskify</span>
    <InputField
      todo={todo}
      setTodo={setTodo}
      handleAdd={handleAdd}
    />
    <TodoList
      todos={todos}
      setTodos={setTodos}
    />
  </div>;
}