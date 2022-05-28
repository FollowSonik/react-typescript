import React from "react"
import useActions from "../hooks/useActions";

import useTypedSelector from "../hooks/useTypedSelector";

export default function () {
  const {
    page,
    error,
    limit,
    loading,
    todos
  } = useTypedSelector(state => state.todo);

  const {fetchTodos, setTodoPage} = useActions();

  const pages = [1, 2, 3, 4, 5];

  React.useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map(todo => {
        return <div key={todo.id}>{todo.id} – {todo.title}</div>;
      })}
      <div style={{display: "flex"}}>
        {pages.map(p => {
          return <div
            onClick={() => setTodoPage(p)}
            key={p}
            style={{
              cursor: "pointer",
              border: p === page ?
              "2px solid green" :
              "1px solid gray",
              padding: 10
            }}>{p}
          </div>;
        })}
      </div>
    </div>
  );
}