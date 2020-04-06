import React from "react";
import Cards from "./CardList";
import { data } from "./Dudes";
import Search from "./Searchbox";
import "./Styles.css";

const App = () => {
  return (
    <div className="appContainer">
      <h1 className="appTitle">Dudes of the world</h1>
      <Search />
      <Cards dudes={data} />
    </div>
  );
};

export default App;
