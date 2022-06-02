import React from "react";
import "./styles.css";

interface ITodo {
  todo: string;
  setTodo(todo: string): void;
  handleAdd(e: React.FormEvent): void;
}

// eslint-disable-next-line
export default function ({todo, setTodo, handleAdd}: ITodo): React.ReactElement {
  const inputRef = React.useRef<HTMLInputElement>(null);

  console.log(inputRef.current?.value);

  return <form
      className="input"
      onSubmit={handleAdd}
    >
    <input
      ref={inputRef}
      type="input"
      value={todo}
      placeholder="Enter a task"
      className="input__box"
      onChange={e => setTodo(e.target.value)}
    />
    <button
      className="input__submit"
      type="submit"
    >Go</button>
  </form>;
}