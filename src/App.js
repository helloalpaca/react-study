import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";

import Main from "./domain/Main/index";
import Send from "./domain/Send/index";
import Policy from "./domain/Policy/index";
import Footer from "./components/Footer";
import Redux from "./domain/Redux/index";

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/send" component={Send} />
          <Route path="/policy" component={Policy} />
          <Route path="/redux" component={Redux} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
