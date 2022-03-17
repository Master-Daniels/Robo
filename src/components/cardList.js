import React from "react";
import Card from "./card";

const cardList = ({ newName }) => {
  return (
    <div>
      {newName.map((user, i) => {
        return (
          <Card
            key={i}
            id={newName[i].id}
            name={newName[i].name}
            email={newName[i].email}
          />
        );
      })}
    </div>
  );
};

export default cardList;
