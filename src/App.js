import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "./styles/slick.css";
import "./styles/style.css";
import "./styles/content.css";

import Main from "./domain/Main/index";
import Policy from "./domain/Policy/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/policy" component={Policy} />
      </Router>
    );
  }
}

export default App;
