import React, { Component } from "react";

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
        <p>Main</p>
      </div>
    );
  }
}

export default Main;
