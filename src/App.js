import React, { Component } from "react";
import Cards from "./CardList";
import { data } from "./Dudes";
import Search from "./Searchbox";
import "./Styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredDudes = this.state.data.filter(data => {
      return data.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="appContainer">
        <h1 className="appTitle">Dudes of the world</h1>
        <Search searchChange={this.onSearchChange} />
        <Cards dudes={filteredDudes} />
      </div>
    );
  }
}

export default App;
