import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={TodosPage} path="/" exact></Route>
            <Route component={AboutPage} path="/about"></Route>
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;