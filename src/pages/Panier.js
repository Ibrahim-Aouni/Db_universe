import React from "react";
import "../tri/FigurineCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Panier extends React.Component {
  state = {
    search: "",
    products: [],
    figurines: [],
    visible: false,
  };
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInput(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }
  handleSearch(event) {
    event.preventDefault();
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?category=figurine&limit=12&&search=" +
        this.state.search
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState((state) => {
          return {
            search: "",
            figurines: json.products,
          };
        });
      });
  }
  getPanier() {
    let items = JSON.parse(localStorage.getItem("items"));
    this.setState({
      products: items,
      visible: true,
    });
  }

  cache() {
    this.setState({
      visible: false,
    });
  }

  vider() {
    this.setState({
      products: [],
    });
    localStorage.setItem("items", null);
  }
  render() {
    console.log(this.state.search);
    console.log(this.state.figurines.id);
    return <div style={{ height: "100vh", maxWidth: "100%" }}></div>;
  }
}
