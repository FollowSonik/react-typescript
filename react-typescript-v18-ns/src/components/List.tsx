import React from "react";

interface IProps {
  name: string;
  age: number;
  url: string;
  note?: string;
}

// eslint-disable-next-line
export default function({age, name, url, note}: IProps): React.ReactElement {
  console.log({age, name, url, note});

  return (
    <div>
      <p>Name: {name}</p>
      <h3>Age: {age}</h3>
      Contact: {url}
    </div>
  );
}