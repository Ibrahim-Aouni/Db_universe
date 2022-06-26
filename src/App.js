import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navebar from "./Component/Navebar";
import Home from "./pages/Home";
import Navs from "./Component/Navs";
import Actu from "./pages/Actu";
import Footer from "./Component/Footer";
import FigurineCard from "./tri/FigurineCard";
import Produit from "./tri/FigurineCardProduit";
import Jeu from "./Component/Jeu";
import Panier from "./pages/Panier";

function App() {
  return (
    <div>
      <Navebar />
      <Navs />

      <div className="columns">
        <div className="column is-4"></div>
        <div className="column">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/actu">
              <Actu />
            </Route>
            <Route path="/jeu">
              <Jeu />
            </Route>
            <Route path="/card">
              <FigurineCard />
            </Route>
            <Route path="/figurine/produit/:id">
              <Produit />
            </Route>
            <Route path="/panier">
              <Panier />
            </Route>
            <Route path="*"></Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
