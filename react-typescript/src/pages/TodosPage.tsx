import React, { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

declare const confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };

    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log(todo);
      }

      return todo;
    }));
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Are you sure to delete the item?");

    shouldRemove && setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return <React.Fragment>
    <TodoForm onAdd={addHandler} />
    <TodoList
      todos={todos}
      onToggle={toggleHandler}
      onRemove={removeHandler}
    />
  </React.Fragment>
};