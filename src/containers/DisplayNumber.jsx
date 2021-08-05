import DisplayNumber from "../domain/Redux/DisplayNumber";
import React, {Component} from "react";
import store from "../app/store";

export default class extends Component{
    state = { number:store.getState().number };
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }

    render(){
        return (
            <DisplayNumber number={this.state.number}></DisplayNumber>
        ) 
    }
}