import React from "react";
import { Component } from "react";

class Greeting extends Component {

    render() {
        return (
        <>
        {/* <h1>im a class component </h1> */}
        <h1>my name is {this.props.name} and age is {this.props.age} </h1>
        </>
        )
    }
}
export default Greeting;