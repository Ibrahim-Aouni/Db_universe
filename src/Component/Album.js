import React from "react";
import "./Album.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Album() {
  var images = [
    "http://ukiyaseed.weebly.com/uploads/5/8/8/7/58878313/5c010cb57e369_orig.jpg",
    "http://ukiyaseed.weebly.com/uploads/5/8/8/7/58878313/5c010cb57e369_orig.jpg",
    "http://ukiyaseed.weebly.com/uploads/5/8/8/7/58878313/5c010cb57e369_orig.jpg",
  ];
  console.log(images);
  return (
    <div
      className="container"
      style={{ maxWidth: "100%", backgroundColor: "orange" }}
    >
      <div style={{ backgroundColor: "red", width: "100%" }}>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          LES PROCHAINES SORTIES
        </p>
      </div>

      <div style={{ boxShadow: " 10px 5px 5px black" }}>
        <div className="d-flex flex-wrap  ">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="https://hotstuff4geeks.com/wp-content/uploads/2022/03/Dragon-Ball-Goku-Flying-Nimbus-10-Inch-Jumbo-Sized-Funko-Pop-2.jpg"
                  alt="Paris"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="flip-box-back">
                <h2>Figurine Pop</h2>
                <p>Bientôt de nouveaux goodies</p>
              </div>
            </div>
          </div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src={images[0]}
                  alt="Paris"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="flip-box-back">
                <h2>Figurine Broly et Gogeta </h2>
                <p>Figurine du film Broly</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center flex-wrap"
          style={{ maxWidth: "100%" }}
        >
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="https://dragonballsuper-france.fr/wp-content/uploads/2021/12/sh-figuarts-dragon-ball-super-super-hero.jpg"
                  alt="Paris"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="flip-box-back">
                <h2>
                  Figurine du film:
                  <br />
                  Dragon ball super hero
                </h2>
                <p>La nouvelle collection</p>
              </div>
            </div>
          </div>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img
                  src="https://hotstuff4geeks.com/wp-content/uploads/2021/01/Funko-Pop-Dragon-Ball-Z-768x768.jpg"
                  alt="Paris"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="flip-box-back">
                <h2>Figurine pop</h2>
                <p>Bientôt de nouveaux goodies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="flip-box"
          style={{
            maxWidth: "100%",
            boxShadow: " 10px 5px 5px black",
            height: "400px",
          }}
        >
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                src="https://www.glenat.com/sites/default/files/images/livres/couv/9782723434621-001-T.jpeg"
                alt="Paris"
                style={{ width: "300px", height: "400px" }}
              />
            </div>
            <div className="flip-box-back">
              <h2>Tome</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
