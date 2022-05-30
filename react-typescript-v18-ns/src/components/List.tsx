import React from "react";

import {IUser} from "../types/user";

import AddToList from "./AddToList";

// eslint-disable-next-line
export default function(): React.ReactElement {
  const [people, setPeople] = React.useState<IUser[]>([
    {
      name: "FollowSonik",
      age: 20,
      url: "https://yt3.ggpht.com/ytc/AKedOLQ5Ntne0d_ifYikiDnAlidpAu1hVBw4D18pF3A5Eg=s900-c-k-c0x00ffffff-no-rj",
      note: "I'm just a memer."
    }, {
      name: "Coltrane Crowley",
      age: 20,
      url: "https://pbs.twimg.com/profile_images/952905597/928841_20050829_embed001_400x400.jpg",
      note: "Who said that was a meme?"
    }, {
      name: "Decoy",
      age: 25,
      url: "https://www.postavy.cz/foto/decoy-foto.jpg",
      note: "CCK killed him.."
    },
  ]);

  return (
    <ul>
      {people.map(({name, age, url, note}, index) => {
        return (
          <li className="List" key={index}>
            <div className="List-header">
              <img className="List-img" src={url} />
              <h2>{name}</h2>
            </div>
            <p>{age} years old</p>
            <p className="List-note">{note}</p>
          </li>
        );
      })}
      <AddToList people={people} setPeople={setPeople}/>
    </ul>
  );
}