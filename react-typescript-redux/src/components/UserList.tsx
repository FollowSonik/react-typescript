import React from "react";

import useActions from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

// eslint-disable-next-line
export default function () {
  const {users, error, loading} = useTypedSelector(state => state.user);

  const {default: fetchUsers} = useActions();

  React.useEffect(() => {
    fetchUsers();
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