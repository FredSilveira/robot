import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hey there bud!</h1>
        <p>{this.props.asking}</p>
      </div>
    );
  }
}
