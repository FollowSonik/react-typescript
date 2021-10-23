import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";

const App: React.FC = () => {
  // const users: IUser[] = [
  //   { id: 1, name: "Follow", email: "follow@gmail.com", address: { city: "Krasnoyarsk", street: "Kirenskogo", zipcode: "322-228" } },
  //   { id: 2, name: "Sonik", email: "sonik@gmail.com", address: { city: "Kemerovo", street: "Sobornaya", zipcode: "1337-906" } }
  // ];

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Route path={"/users"} exact>
          <UsersPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>
        <Route path={"/users/:id"}>
          <UserItemPage />
        </Route>
        <Route path={"/todos/:id"}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;