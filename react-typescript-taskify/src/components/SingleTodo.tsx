import React from "react";

import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md";

import ITodo from "./model";

import "./styles.css";

type SingleTodoType = {
  todo: ITodo;
  todos: ITodo[];
  setTodos(todos: ITodo[]): any;
}

// eslint-disable-next-line
export default function ({todo, todos, setTodos}: SingleTodoType): React.ReactElement {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

  function handleDone(id: number) {
    setTodos(todos.map(todo => {
      return todo.id === id
        ? {...todo, isDone: !todo.isDone}
        : todo;
    }));
  }

  function handleDelete(id: number) {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }));
  }

  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodos(todos.map(todo => {
      return todo.id === id ?
        {...todo, todo: editTodo} :
        todo;
    }));

    setIsEdit(false);
  }

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return <form
      className="todos__single"
      onSubmit={e => handleEdit(e, todo.id)}
    >
    {isEdit ?
      <input
        ref={inputRef}
        className="todos__single--text"
        value={editTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEditTodo(e.target.value);
        }}
      /> :
      todo.isDone ?
      <s className="todos__single--text">
        {todo.todo}
      </s> :
      <span className="todos__single--text">
        {todo.todo}
      </span>
    }
    <div>
      <span className="icon" onClick={() => {
        if (!(isEdit && todo.isDone)) {
          setIsEdit(prev => !prev);
        }
      }}>
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </div>
  </form>;
}