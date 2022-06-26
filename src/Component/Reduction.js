import React, { Component } from "react";
import "./Reduction.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Reduction extends React.Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <div
          className="Reduction"
          style={{ height: "70vh", margin: "auto", maxWidth: "1300px" }}
        ></div>
        <div
          className="Catchers"
          style={{ height: "70vh", margin: "auto", maxWidth: "1300px" }}
        ></div>
      </div>
    );
  }
}

export default Reduction;
