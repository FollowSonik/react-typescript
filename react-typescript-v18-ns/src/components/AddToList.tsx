import React from "react";

import {IUser} from "../types/user";

interface IAddListUser {
  people: IUser[];
  setPeople(user: IUser[] | null | undefined): void;
}

// eslint-disable-next-line
export default function({people, setPeople}: any | IAddListUser): React.ReactElement {
  // If there's no passed as an argument to the React.useState(here!) the warning is showing up.
  const [user, setUser] = React.useState<IUser | null>(null);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(...people);
    console.log(user);

    setPeople([...people, user]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const userInput: IUser = {
      ...user,
      [e.target.name]: e.target.value,
    };

    setUser(userInput);
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        name="name"
        value={user?.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        name="age"
        value={user?.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Url"
        className="AddToList-input"
        name="url"
        value={user?.url}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        value={user?.note}
        onChange={handleChange}
      />
      <button
        className="AddToList-btn"
        onClick={handleClick}
      >Add to List
      </button>
    </div>
  );
}