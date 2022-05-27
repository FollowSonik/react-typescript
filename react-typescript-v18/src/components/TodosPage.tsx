import React from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

import {ITodo, IURL} from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

// eslint-disable-next-line
export default function ({baseUrl, page}: IURL) {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetchTodos(page);
  }, []);

  async function fetchTodos(page: string) {
    try {
      const response = await axios.get<ITodo[]>(`${baseUrl}/${page}`);

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