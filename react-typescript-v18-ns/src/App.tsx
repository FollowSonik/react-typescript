import React from "react";

import "./App.css";

import List from "./components/List";

interface IState {
  name: string;
  age: number;
  url: string;
  note?: string;
}

// eslint-disable-next-line
export default function () {
  const [people, setPeople] = React.useState<IState[]>([]);

  return (
    <div className="App">
      <h1>People have been invited to my party</h1>
      <List
        age={11}
        name="FollowSonik"
        url="followsonik@gmail.com"
      />
    </div>
  );
}