import React from "react";
import axios from "axios";

import {useParams, useNavigate} from "react-router-dom";

import {IUser, IParams} from "../types/types";

import config from "../config/config.json";

// eslint-disable-next-line
export default function () {
  const [user, setUser] = React.useState<IUser | null>(null);

  const params = useParams() as IParams;
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`${config.jsonplaceholder.baseUrl}/users/${params.id}`);

      setUser(response.data);
    } catch (e) {
      console.error("VisLaudErrorUsers:", e);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>{user?.name}'s page.</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
    </div>
  );
}