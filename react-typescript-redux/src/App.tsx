import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

// eslint-disable-next-line
export default function () {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}