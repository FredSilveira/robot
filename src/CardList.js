import React from "react";
import Card from "./Card";

const Cards = ({ dudes }) => {
  return (
    <div>
      <h1>D Dudes of the World</h1>
      {dudes.map((e, i) => {
        return (
          <Card
            key={dudes[i].id}
            id={dudes[i].id}
            email={dudes[i].email}
            name={dudes[i].name}
          />
        );
      })}
    </div>
  );
};

export default Cards;
