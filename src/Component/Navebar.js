import React from "react";
import "../tri/FigurineCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Navebar extends React.Component {
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
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" style={{ fontWeight: "700" }}>
            DRAGON BAll SHOP
          </a>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f82cc357-e354-4ef7-8b2d-647f6f756800/d8vx5uc-507852a3-35ce-46cd-8a58-60f31964a978.png/v1/fill/w_1024,h_494,strp/dragon_ball___logo_by_shikomt_by_shikomt_d8vx5uc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk0IiwicGF0aCI6IlwvZlwvZjgyY2MzNTctZTM1NC00ZWY3LThiMmQtNjQ3ZjZmNzU2ODAwXC9kOHZ4NXVjLTUwNzg1MmEzLTM1Y2UtNDZjZC04YTU4LTYwZjMxOTY0YTk3OC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KKxzn5nHk0NC9bReCLq5xZWX3BOFDqLXsqsPH-DVeis"
            style={{ width: "300px" }}
          />
          <form className="form-inline d-flex" onSubmit={this.handleSearch}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleInput}
              value={this.state.search}
              required
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{ color: "orange", border: "1px solid orange" }}
            >
              Search
            </button>
          </form>
          <Link to="/panier">
            <button
              className="btn btn-transparent"
              onClick={() => this.getPanier()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                class="bi bi-bag-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </button>
          </Link>
        </nav>
        <div
          className="d-flex align-items-center justify-content-center flex-wrap"
          style={{ width: "1400px", margin: "auto", textDecoration: "none" }}
        >
          {this.state.figurines.map((figurine) => {
            // ici, on mets une key avec l'id de l'anime
            // on pourrait aussi mettre l'index de la boucle

            return (
              <div key={figurine.id} className="column is-4">
                <div data={figurine}>
                  <div className="container">
                    <div className="d-lg-flex">
                      <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div className="backgroundEffect"></div>{" "}
                        <div className="pic">
                          <Link
                            id={figurine.id}
                            to={`figurine/produit/${figurine.id}`}
                          >
                            <img
                              key={figurine.id}
                              className=""
                              src={figurine.images.thumbs[0]}
                              alt=""
                            />
                          </Link>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.visible && (
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            style={{
              opacity: "1",
              display: "block",
              overflowY: "scroll",
            }}
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div
                className="modal-content"
                style={{
                  width: "1000px",
                  height: "700px",
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transform: "translate(-50%, 20%)",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Votre Panier</h5>
                  <button
                    onClick={() => this.cache()}
                    className="btn btn-transparent"
                  >
                    X
                  </button>
                </div>
                <div className="d-flex flex-column  align-items-center modal-body ">
                  <div className="d-flex">
                    <button
                      className="btn btn-danger"
                      onClick={() => this.vider()}
                      style={{
                        padding: "10px",
                        width: "30%",
                        marginBottom: "10px",
                      }}
                    >
                      Delete All
                    </button>
                  </div>

                  {this.state.products &&
                    this.state.products.map((figurine) => {
                      return (
                        <div
                          className="card  align-items-center"
                          style={{
                            padding: "10px",
                            width: "80%",
                            marginBottom: "10px",
                            height: "200px",
                          }}
                        >
                          <div className="d-flex flex-row" style={{}}>
                            <img
                              style={{ width: "100px", borderRadius: "30px" }}
                              src={figurine.images.thumbs[0]}
                              alt="Card image cap"
                            />
                            <h6
                              style={{ marginLeft: "10px", marginTop: "40px" }}
                            >
                              {figurine.title}
                            </h6>{" "}
                            <p
                              style={{ marginLeft: "10px", marginTop: "39px" }}
                            >
                              {" "}
                              {"Prix : "} {figurine.price}
                            </p>
                            <p
                              style={{ marginLeft: "10px", marginTop: "39px" }}
                            >
                              {" "}
                              {"Quantite : "}
                              {figurine.stock}
                            </p>
                            <p
                              style={{ marginLeft: "10px", marginTop: "39px" }}
                            >
                              {" "}
                              {"Rating : "}
                              {figurine.rating}/5
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
