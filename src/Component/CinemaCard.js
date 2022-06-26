import React, { Component } from "react";
import "./Cinema.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Cinema extends React.Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ maxWidth: "100%", height: "70vh", marginTop: "100px" }}>
        <div
          className="cinema"
          style={{ height: "70vh", margin: "auto", maxWidth: "1300px" }}
        ></div>
      </div>
    );
  }
}

export default Cinema;
