import React from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";

import {IUser, IURL} from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

// eslint-disable-next-line
export default function ({baseUrl, page}: IURL) {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetchUsers(page);
  }, []);

  async function fetchUsers(page: string) {
    try {
      const response = await axios.get<IUser[]>(`${baseUrl}/${page}`);

      setUsers(response.data);
    } catch (e) {
      console.error("VisLaudErrorUsers:", e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem onClick={user => navigate(`${user.id}`)} user={user} key={user.id} />}
    />
  );
}