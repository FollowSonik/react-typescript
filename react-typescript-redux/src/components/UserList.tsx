import React from "react";
import {useDispatch} from "react-redux";

import useTypedSelector from "../hooks/useTypedSelector";

import fetchUsers from "../store/action-creator/user";

// eslint-disable-next-line
export default function () {
  const {users, error, loading} = useTypedSelector(state => state.user);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map(user => {
        return <div key={user.id}>{user.name}</div>
      })}
    </div>
  );
}