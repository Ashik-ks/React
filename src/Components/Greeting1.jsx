import React from "react";

function Greeting1 (props) {
    return ( <>
    {/* <h1>im a functional component</h1> */}
    <h1>im from  {props.palce}  and my pincode is {props.pincode}</h1>
    </>)
}

export default Greeting1