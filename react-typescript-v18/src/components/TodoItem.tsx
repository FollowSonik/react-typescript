import React from "react";

import {ITodo} from "../types/types";

interface ITodoItemProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

// eslint-disable-next-line
export default function ({todo, onClick}: ITodoItemProps) {
  return (
    <div onClick={() => onClick(todo)}>
      <input type="checkbox" checked={todo.completed}/>
      {todo.id}. {todo.title}
    </div>
  );
}