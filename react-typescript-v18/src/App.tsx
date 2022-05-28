import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";

import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";

import TodoItemPage from "./components/TodoItemPage";
import UserItemPage from "./components/UserItemPage";

// eslint-disable-next-line
export default function () {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
        <EventsExample />
        <Card
          variant={CardVariant.primary}
          width="200px"
          height="200px"
        >
          <button
          onClick={() => setIsClicked(prev => !prev)}
          >Button</button>
          {
            isClicked ?
            <div>PagChomp!</div> :
            <div>SourPls!</div>
          }
        </Card>
      </div>
    </BrowserRouter>
  );
};