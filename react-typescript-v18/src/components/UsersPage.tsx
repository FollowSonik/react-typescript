import React from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

import {IUser} from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

import config from "../config/config.json";

// eslint-disable-next-line
export default function () {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>(`${config.jsonplaceholder.baseUrl}/users`);
  
        setUsers(response.data);
      } catch (e) {
        console.error("VisLaudErrorUsers:", e);
      }
    }

    fetchUsers();
  }, []);

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem onClick={user => navigate(`${user.id}`)} user={user} key={user.id} />}
    />
  );
}