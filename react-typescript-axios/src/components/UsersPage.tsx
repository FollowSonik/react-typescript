import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem
        onClick={user => history.push(`/users/${user.id}`)}
        user={user}
        key={user.id}
      />}
    />
  );
};

export default UsersPage;