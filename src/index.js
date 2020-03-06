import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Card from "./Card";
import { dudes } from "./Dudes";

ReactDOM.render(
  <>
    <Card id={dudes[0].id} email={dudes[0].email} name={dudes[0].name} />
    <Card id={dudes[1].id} email={dudes[1].email} name={dudes[1].name} />
    <Card id={dudes[2].id} email={dudes[2].email} name={dudes[2].name} />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
