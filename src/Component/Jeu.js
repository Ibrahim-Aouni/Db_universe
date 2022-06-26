import React, { Component } from "react";
import "./Jeu.css";
import Cinema from "./CinemaCard";
import Reduction from "./Reduction";
class Jeu extends React.Component {
  state = {};
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="app">
          <div className="doors">
            <div className="door">
              <div className="boxes">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ce01c50-e47c-4d80-acd3-6e214f80e70f/ddg7dn1-400215b6-334f-4f8b-b096-5fd2f697fefb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjZTAxYzUwLWU0N2MtNGQ4MC1hY2QzLTZlMjE0ZjgwZTcwZlwvZGRnN2RuMS00MDAyMTViNi0zMzRmLTRmOGItYjA5Ni01ZmQyZjY5N2ZlZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8V6EYqnhoiPoOFqqAHTAdlRXaTxnPRimll3TGUrm_aM"
                  style={{ width: "100px" }}
                />
              </div>
            </div>

            <div className="door">
              <div className="boxes">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ce01c50-e47c-4d80-acd3-6e214f80e70f/dcsdasn-00015986-7486-4143-b1b1-5eaf2b6e32ca.png/v1/fill/w_1280,h_1722,strp/dragon_ball___kid_goku_43_by_superjmanplay2_dcsdasn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyMiIsInBhdGgiOiJcL2ZcLzhjZTAxYzUwLWU0N2MtNGQ4MC1hY2QzLTZlMjE0ZjgwZTcwZlwvZGNzZGFzbi0wMDAxNTk4Ni03NDg2LTQxNDMtYjFiMS01ZWFmMmI2ZTMyY2EucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5WgfrdUBzkXPhACn-F823Cxxv_oQG48X1XM2qdL9378"
                  style={{ width: "100px" }}
                />
              </div>
            </div>

            <div className="door">
              <div className="boxes">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ce01c50-e47c-4d80-acd3-6e214f80e70f/ddg7dn1-400215b6-334f-4f8b-b096-5fd2f697fefb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjZTAxYzUwLWU0N2MtNGQ4MC1hY2QzLTZlMjE0ZjgwZTcwZlwvZGRnN2RuMS00MDAyMTViNi0zMzRmLTRmOGItYjA5Ni01ZmQyZjY5N2ZlZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8V6EYqnhoiPoOFqqAHTAdlRXaTxnPRimll3TGUrm_aM"
                  style={{ width: "100px" }}
                />
              </div>
            </div>
          </div>

          <div className="buttons">
            <button id="spinner">Spin</button>
            <button id="reseter">Reset</button>
          </div>
        </div>
        <Cinema />
        <Reduction />
      </div>
    );
  }
}

export default Jeu;
