import React from "react";
import "./Styles.css";

const Search = ({ searchChange }) => {
  return (
    <div className="searchBoxContainer">
      <input
        type="search"
        placeholder="Find your dude"
        className="searchBox"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
