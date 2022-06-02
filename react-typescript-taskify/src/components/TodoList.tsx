import ITodo from "./model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface ITodos {
  todos: ITodo[];
  setTodos(todos: ITodo[]): any;
}

// eslint-disable-next-line
export default function ({todos, setTodos}: ITodos): React.ReactElement {
  return <div className="container">
    <div className="todos">
      <span className="todos__heading">
        Active Tasks
      </span>
      {todos.map(todo => {
        return <SingleTodo
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
        />;
      })}
    </div>
    <div className="todos remove">
      <span className="todos__heading">
      Completed Tasks
      </span>
      {todos.map(todo => {
        return <SingleTodo
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
        />;
      })}
    </div>
  </div>;
}