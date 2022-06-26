import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Presentation() {
  return (
    <Carousel
      style={{
        height: "60vh",
        backgroundColor: "black",
        backgroundImage:
          "url(" +
          "https://c4.wallpaperflare.com/wallpaper/721/518/464/dragon-ball-son-goku-chi-chi-manga-kid-goku-hd-wallpaper-preview.jpg" +
          ")",
        backgroundRepeat: " no-repeat",

        backgroundSize: " cover",
      }}
    >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50 p-3 h-100 d-inline-block"
          style={{ margin: "auto" }}
          src="https://www.touchtapplay.com/wp-content/uploads/2021/12/Dragon-Ball-Legends-QR-Codes-1068x579.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "#0000" }}></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50 p-3 h-100 d-inline-block"
          style={{ margin: "auto" }}
          src="https://dragonballsuper-france.fr/wp-content/uploads/2022/03/Dragon-Ball-Super-Tome-18-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50 p-3 h-100 d-inline-block"
          style={{ margin: "auto" }}
          src="https://dragonballsuper-france.fr/wp-content/uploads/2022/01/Dragon-Ball-Super-Brouillons-chapitre-80-660x330.jpg"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 p-3 h-100 d-inline-block"
          style={{ margin: "auto" }}
          src="https://fr.dragon-ball-official.com/dragonball/fr/banner/2022/06/aHm7YliMTtgVO7C3/20220611_%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB%E8%B6%85%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E5%85%AC%E9%96%8B%E6%97%A5_fr.png"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Presentation;
