import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { browserHistory } from "react-router";

import Home from "./components/home.js";
import BasicShine from "./components/BasicShine.js";
import PremiumShine from "./components/PremiumShine.js";
import UltimateShine from "./components/UltimateShine.js";
import NavbarInstance from "./components/navbar.js";


class App extends Component {
  constructor(props){
    super(props);
      this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
            <div>
              <NavbarInstance />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/BasicShine" component={BasicShine} />
                <Route exact path="/PremiumShine" component={PremiumShine} />
                <Route exact path="/UltimateShine" component={UltimateShine} />
              </Switch>
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
