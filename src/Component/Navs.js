import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navs() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={{
              fontFamily: "oswald",
              color: "#ffb200",
              fontWeight: "700",
              fontSize: "24px",
              marginLeft: "30px",
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={{
              fontFamily: "oswald",
              color: "#ffb200",
              fontWeight: "700",
              fontSize: "24px",
              marginLeft: "30px",
            }}
            to="/card"
          >
            SHOP
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={{
              fontFamily: "oswald",
              color: "#ffb200",
              fontWeight: "700",
              fontSize: "24px",
              marginLeft: "30px",
            }}
            to="/actu"
          >
            ACTU
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={{
              fontFamily: "oswald",
              color: "#ffb200",
              fontWeight: "700",
              fontSize: "24px",
              marginLeft: "30px",
            }}
            to="/jeu"
          >
            JEU
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            href="#"
            style={{ fontFamily: "oswald", color: "#ffb200" }}
          ></a>
        </li>
      </ul>
    </div>
  );
}

export default Navs;
