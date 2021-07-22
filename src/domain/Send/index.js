import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import Content from "./Content";

class Main extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      img1 : '../../images/directions_bus_filled_white_24dp.svg',
      img1alt : 'img1alt',
      img2 : '../../images/moving_white_24dp.svg',
      img2alt : 'img2alt',
      title1: '터미널에 도착하는 물건을 \n배송하고 싶어요.', 
      title2: '픽업 후 다른 곳으로 배송해주세요.'
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Content title1={this.state.title1} title2={this.state.title2} img1={this.state.img1} img1alt={this.state.img1alt} img2={this.state.img2} img2alt={this.state.img2alt} />
      </div>
    );
  }
}

export default Main;
