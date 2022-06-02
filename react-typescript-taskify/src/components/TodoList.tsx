import {Droppable} from "react-beautiful-dnd";

import ITodo from "./model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface ITodos {
  todos: ITodo[];
  setTodos(todos: ITodo[]): void;
  completedTodos: ITodo[];
  setCompletedTodos(todos: ITodo[]): void;
}

// eslint-disable-next-line
export default function ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos
}: ITodos): React.ReactElement {
  return <div className="container">
    <Droppable droppableId="TodosList">
      {(provided) => {
        return <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
        </div>;
        }
      }
    </Droppable>
    <Droppable droppableId="TodosRemove">
      {(provided) => {
        return <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
          <span className="todos__heading">
          Completed Tasks
          </span>
          {completedTodos.map(todo => {
            return <SingleTodo
              todo={todo}
              todos={completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
            />;
          })}
        </div>;
      }}
    </Droppable>
  </div>;
}