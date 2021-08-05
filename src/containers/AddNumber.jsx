import AddNumber from "../domain/Redux/AddNumber";
import React, {Component} from "react";
import store from "../app/store";

export default class extends Component{
    render(){
        return <AddNumber onClick={function(size){
            store.dispatch({type:'INCREMENT', size: size});
        }.bind(this)}></AddNumber>
    }
}