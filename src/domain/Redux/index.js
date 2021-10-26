import React, { Component } from 'react';
//import AddNumber from "./AddNumber";
import DisplayNumber from '../../containers/DisplayNumber';
import AddNumber from '../../containers/AddNumber';

class Redux extends Component {
  render() {
    return (
      <div>
        <AddNumber></AddNumber>
        <DisplayNumber></DisplayNumber>
      </div>
    );
  }
}

export default Redux;
