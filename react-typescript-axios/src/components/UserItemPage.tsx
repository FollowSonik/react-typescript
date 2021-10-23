import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IUser } from "../types/types";

interface IUserItemPageParams {
  id: string;
}

const UserItemPage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<IUserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <button onClick={() => history.push("/users")}>Back</button>
      <h1>User Page {user?.name}</h1>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;