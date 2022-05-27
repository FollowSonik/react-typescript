import React from "react";
import axios from "axios";

import {useParams, useNavigate} from "react-router-dom";

import {IParams, ITodo, IURL} from "../types/types";

// eslint-disable-next-line
export default function ({baseUrl, page}: IURL) {
  const [todo, setTodo] = React.useState<ITodo | null>(null);

  const params = useParams<IParams | any>();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchTodo(page);
  }, []);

  async function fetchTodo(page: string) {
    try {
      const response = await axios.get<ITodo>(`${baseUrl}/${page}/${params.id}`);

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