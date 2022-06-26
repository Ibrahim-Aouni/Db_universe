import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Presentation from "../Component/Presentation";
import React from "react";
import Album from "../Component/Album";

let page = 1;
class Home extends React.Component {
  state = {
    activepage: "Card",
    search: "",
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
  handleFetch(page) {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?category=figurine&limit=8 " +
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
    return (
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://fr.dragon-ball-official.com/assets/img/shared/bg_comics_pc.jpg" +
            ")",
          backgroundRepeat: "no-repeat",

          backgroundSize: " cover ",
        }}
      >
        <Presentation />
        <Link to="/card">
          <div
            style={{
              marginTop: "100px",
              marginBottom: "100px",
              maxWidth: "100%",
            }}
          >
            <img
              src="https://dragonballsuper-france.fr/wp-content/uploads/2018/02/Les-Figurines-Dragon-Ball-Super-et-d%C3%A9riv%C3%A9s.jpg"
              style={{
                margin: "auto",
                maxWidth: "100%",
                display: "block",
              }}
              alt=""
            />
          </div>
        </Link>
        <Album />
        <div
          className="d-flex align-items-center justify-content-center flex-wrap "
          style={{ maxWidth: "100%", margin: "auto", textDecoration: "none" }}
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
                            <div className="d-flex align-items-center justify-content-center foot">
                              <button type="button" className="btn btn-primary">
                                Ajouter au panier
                              </button>
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
      </div>
    );
  }
}

export default Home;
