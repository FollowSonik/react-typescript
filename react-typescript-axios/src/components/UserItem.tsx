import React from "react";
import { IUser } from "../types/types";

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: React.FC<IUserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}. {user.name} lived in {user.address.city} city on the {user.address.street} street.
    </div>
  );
};

export default UserItem;