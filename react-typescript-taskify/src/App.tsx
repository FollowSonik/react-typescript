import React from "react";

import {DragDropContext} from "react-beautiful-dnd";

import "./App.css";
import InputField from "./components/InputField";

import ITodo from "./components/model";
import TodoList from "./components/TodoList";

// eslint-disable-next-line
export default function (): React.ReactElement {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [completedTodos, setCompletedTodos] = React.useState<ITodo[]>([]);

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

  return <DragDropContext onDragEnd={() => {}}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>;
  </DragDropContext>;
}