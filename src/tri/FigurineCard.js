import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FigurineCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

let page = 1;
export default class FigurineCard extends Component {
  state = {
    activepage: "Card",
    search: "",
    products: [],
    figurines: [],
  };
  constructor() {
    super();
    this.pageChanges = this.pageChanges.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }
  pageChanges(page) {
    this.setState(() => {
      return {
        activepage: page,
      };
    });
  }
  handleInput(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
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
  handleFetch(page) {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?category=figurine&limit=12 " +
        "&page=" +
        page
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState((state) => {
          return {
            search: "",
            figurines: json.products,
          };
        });
      });
  }

  componentDidMount() {
    this.handleFetch(page);
  }

  render() {
    console.log(this.state.figurines.id);
    return (
      <div
        className="figurineCrad d-flex align-items-center justify-content-center flex-wrap "
        style={{ maxWidth: "100%", margin: "auto", textDecoration: "none" }}
      >
        {this.state.figurines.map((figurine) => {
          return (
            <Link id={figurine.id} to={`figurine/produit/${figurine.id}`}>
              <div key={figurine.id}>
                <div data={figurine}>
                  <div className="container">
                    <div className="d-lg-flex">
                      <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div className="backgroundEffect"></div>{" "}
                        <div className="pic">
                          <img
                            className=""
                            src={figurine.images.thumbs[0]}
                            alt=""
                          />
                          <div className="date">
                            <span className="day">26</span>{" "}
                            <span className="month">June</span>{" "}
                            <span className="year">2019</span>
                          </div>
                        </div>
                        <div className="content">
                          <p
                            className="h-1 mt-4"
                            style={{ textDecoration: "none" }}
                          >
                            {figurine.title}
                          </p>
                          <div className="text-muted mt-3">
                            {figurine.priceDiscount === null ? (
                              <p>{figurine.price}</p>
                            ) : (
                              <div>
                                <strike>{figurine.price}</strike>
                                <p>{figurine.priceDiscount}</p>
                              </div>
                            )}
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                            <div className="btn btn-primary">
                              Read More
                              <span className="fas fa-arrow-right"></span>
                            </div>
                            <div className="d-flex align-items-center justify-content-center foot"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <div style={{ marginTop: "100px" }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    {
                      page >= 1 ? (page = page - 1) : (page = 1);
                    }

                    this.handleFetch(page);
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    page = 1;

                    this.handleFetch(page);
                  }}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    page = 2;

                    this.handleFetch(page);
                  }}
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    page = 3;

                    this.handleFetch(page);
                  }}
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    {
                      page < 4 ? page++ : (page = 4);
                    }

                    this.handleFetch(page);
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
