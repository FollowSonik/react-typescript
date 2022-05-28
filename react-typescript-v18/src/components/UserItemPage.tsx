import React from "react";
import axios from "axios";

import {useParams, useNavigate} from "react-router-dom";

import {IUser, IURL, IParams} from "../types/types";

// eslint-disable-next-line
export default function ({baseUrl}: IURL) {
  const [user, setUser] = React.useState<IUser | null>(null);

  const params = useParams() as IParams;
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`${baseUrl}/users/${params.id}`);

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