import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatGame from "./components/CreatGame/creatgame";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import Page404 from "./components/Page404/page404";
import videogames from "./components/videogames/videogames";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/videogames" component={videogames} />
        <Route exact path="/CreatGame" component={CreatGame} />
        <Route exact path="/videogame/:idVideogame" component={Details} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
