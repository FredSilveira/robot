import React from "react";
import Card from "./Card";

const Cards = ({ dudes }) => {
  return (
    <div className="dudesWrapper">
      {dudes.map((e, i) => {
        return (
          <Card
            key={dudes[i].id}
            id={dudes[i].id}
            name={dudes[i].name}
            username={dudes[i].username}
            email={dudes[i].email}
          />
        );
      })}
    </div>
  );
};

export default Cards;
