import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/slick.css";
import "./styles/style.css";
import "./styles/content.css";
import "./styles/bootstrap.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div >
          <Navbar />
          <Content />
          <Footer />
      </div>
    );
  }
}

export default App;
