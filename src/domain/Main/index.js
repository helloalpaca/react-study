import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import Content from "./Content";
import Footer from "../../components/Footer";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      title1: "접수하기", 
      title2: "현황확인"
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Content title1={this.state.title1} title2={this.state.title2}/>
        <Footer />
      </div>
    );
  }
}

export default Main;
