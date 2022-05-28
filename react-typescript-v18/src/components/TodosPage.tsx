import React from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

import {ITodo} from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

import config from "../config/config.json";

// eslint-disable-next-line
export default function () {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(`${config.jsonplaceholder.baseUrl}/todos`);

      setTodos(response.data);
    } catch (e) {
      console.error("VisLaudErrorTodos:", e);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem onClick={todo => navigate(`${todo.id}`)} todo={todo} key={todo.id} />}
    />
  );
}