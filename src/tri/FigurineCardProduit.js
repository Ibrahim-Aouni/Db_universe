import React, { Component } from "react";
import { withRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

class Produit extends React.Component {
  state = {
    figurine: [],
    images: [],
    compenent: false,
    visible: false,
  };
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }
  montre = () => {
    console.log("Click");
    this.setState({
      visible: true,
    });
  };
  cache = () => {
    console.log("closing ...");
    this.setState({
      visible: false,
    });
  };
  AddToShop = async (data) => {
    let items = JSON.parse(localStorage.getItem("items"));
    console.log(items);
    if (items === null) {
      items = [];

      items.push(data);

      localStorage.setItem("items", JSON.stringify(items));

      const MySwal = withReactContent(Swal);

      await MySwal.fire({
        title: <strong>Produit Ajouté!</strong>,
        icon: "success",
      });
    } else {
      //yetzed marra barka

      if (!items.some((item) => item.id === data.id)) {
        items.push(data);

        localStorage.setItem("items", JSON.stringify(items));

        const MySwal = withReactContent(Swal);

        await MySwal.fire({
          title: <strong>produit ajouté au panier!</strong>,
          icon: "success",
        });
      } else {
        const MySwal = withReactContent(Swal);

        await MySwal.fire({
          title: <strong>item already present in shop!</strong>,
          icon: "warning",
        });
      }
    }
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.handleFetch(id);
  }
  componentDidUpdate() {
    const { id } = this.props.match.params;
    if (this.state.compenent === true) {
      this.handleFetch(id);
    }

    if (this.state.compenent === false) {
      if (this.props.json !== this.state.figurine) {
        this.handleFetch(id);
      }
      return;
    }
  }
  handleFetch(id) {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products/" +
        id +
        "?category=figurine"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState((state) => {
          return {
            search: "",
            compenent: false,
            figurine: json,
            images: json.images.thumbs,
          };
        });
      });
  }

  render() {
    return (
      <div className="row" style={{ maxWidth: "100%", height: "200vh" }}>
        <div className="col-12" style={{ maxWidth: "100%", height: "200vh" }}>
          <div
            className="card border-orange p-4"
            style={{ width: "100%", margin: "0", height: "200vh" }}
          >
            <div className="row align-items-center">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ width: "400px" }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={this.state.images[0]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={this.state.images[1]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={this.state.images[2]}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="col-md-6">
                <div className="info-main">
                  <h5>{this.state.figurine.title}</h5>
                  <p>Nombre de note:{this.state.raters}</p>
                  <div className="d-flex my-3">
                    <i className="star fas fa-star text-warning mr-1"></i>
                    <i className="star fas fa-star text-warning mr-1"></i>
                    <i className="star fas fa-star text-warning mr-1"></i>
                    <i className="star fas fa-star text-warning mr-1"></i>
                    <i className="star fas fa-star text-warning"></i>

                    <span
                      className="badge badge-pill badge-gray ml-2"
                      style={{ color: "black" }}
                    >
                      Note/{this.state.figurine.rating}
                    </span>
                    <span className="small text-success ml-3">
                      <i className="fas fa-shopping-cart mr-1"></i>150 orders
                    </span>
                  </div>
                  <p>{this.state.figurine.description}</p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="d-flex align-items-center">
                  {this.state.figurine.priceDiscount === null ? (
                    <p>{this.state.figurine.price}</p>
                  ) : (
                    <div>
                      <strike>{this.state.figurine.price}</strike>
                      <p>{this.state.figurine.priceDiscount}</p>
                    </div>
                  )}
                  <br />
                </div>
                <div>
                  <p> stock:{this.state.figurine.stock}</p>
                </div>

                <span className="text-success small">
                  <i className="fas fa-shipping-fast mr-1"></i>Free shipping
                </span>
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      {
                        this.state.figurine.stock === 0 ? (
                          <p>stock vide</p>
                        ) : (
                          this.AddToShop(this.state.figurine)
                        );
                      }
                    }}
                    style={{
                      backgroundColor: "orange",
                      border: "none",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cart-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>{" "}
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Produit);
