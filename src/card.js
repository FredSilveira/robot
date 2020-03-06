import React from "react";

const Card = ({ email, name, id }) => {
  return (
    <div>
      <div>
        <h1>D Dudes</h1>
      </div>
      <div>
        <img
          alt="Headshot"
          src={`https://robohash.org/${id}/size=200x200/?set=set5`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
