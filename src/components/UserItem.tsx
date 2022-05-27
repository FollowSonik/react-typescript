import React from "react"

import {IUser} from "../types/types";

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

// eslint-disable-next-line
export default function ({user, onClick}: IUserItemProps) {
  return (
    <div>
      <div onClick={() => onClick(user)} key={user.id} style={{padding: 15, border: "1px solid gray"}}>
        {user.id}. <h3>{user.name}</h3> lives in {user.address.city} at the {user.address.street} street.
      </div>
    </div>
  );
}