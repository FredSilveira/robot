import React from "react";

const Card = ({ username, email, name, id }) => {
  return (
    <div className="dudeContainer">
      <img
        alt={`${username} Headshot`}
        src={`https://robohash.org/${id}/size=200x200/?set=set5`}
      />
      <h2>{name}</h2>
      <p className="email">{email}</p>
    </div>
  );
};

export default Card;
