import React from "react";

import {DragDropContext, DropResult} from "react-beautiful-dnd";

import "./App.css";
import InputField from "./components/InputField";

import ITodo from "./components/model";
import TodoList from "./components/TodoList";

enum TodoIds {
  todosList = "TodosList",
  todosRemove = "TodosRemove"
}

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

  function onDragEnd(result: DropResult) {
    const {source, destination} = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === TodoIds.todosList) {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === TodoIds.todosList) {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
  }

  return <DragDropContext onDragEnd={onDragEnd}>
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