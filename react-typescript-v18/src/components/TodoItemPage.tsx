import React from "react";
import axios from "axios";

import {useParams, useNavigate} from "react-router-dom";

import {IParams, ITodo} from "../types/types";

import config from "../config/config.json";

// eslint-disable-next-line
export default function () {
  const [todo, setTodo] = React.useState<ITodo | null>(null);

  const params = useParams() as IParams;
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>(`${config.jsonplaceholder.baseUrl}/todos/${params.id}`);

      setTodo(response.data);
    } catch (e) {
      console.error("VisLaudErrorTodos:", e);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/todos")}>Back</button>
      <h1>Todo {todo?.id}: {todo?.title}</h1>
    </div>
  );
}