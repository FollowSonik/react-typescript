import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../types/types";

interface ITodoItemPageParams {
  id: string;
}

const TodoItemPage: React.FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<ITodoItemPageParams>();

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      setTodo(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <button>Back</button>
      <h1>Todo Page {todo?.id}</h1>
      <div>
      </div>
    </div>
  );
};

export default TodoItemPage;