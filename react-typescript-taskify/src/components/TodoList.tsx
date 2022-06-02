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
      {(provided, snapshot) => {
        return <div
            className={`todos ${snapshot.isDraggingOver && "dragactive"}`}
            ref={provided.innerRef}
            {...provided.droppableProps}          >
          <span className="todos__heading">
            Active Tasks
          </span>
          {todos.map((todo, index) => {
            return <SingleTodo
              index={index}
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />;
          })}
          {provided.placeholder}
        </div>;
        }
      }
    </Droppable>
    <Droppable droppableId="TodosRemove">
      {(provided, snapshot) => {
        return <div
            className={`todos remove ${snapshot.isDraggingOver && "dragcomplete"}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
          <span className="todos__heading">
          Completed Tasks
          </span>
          {completedTodos.map((todo, index) => {
            return <SingleTodo
              index={index}
              todo={todo}
              todos={completedTodos}
              key={todo.id}
              setTodos={setCompletedTodos}
            />;
          })}
          {provided.placeholder}
        </div>;
      }}
    </Droppable>
  </div>;
}