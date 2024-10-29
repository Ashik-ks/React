import React from "react";
import { useRef } from "react";

export default function UncontrolledComponent(){

const inputref = useRef(null);

    const handleClick = (e) => {
        alert(`input data : ${inputref.current.value}`);
    }

    return(
        <>
        <input type="text" ref={inputref}/>
       <button onClick={handleClick}>Get input data</button>
        </>
    )
}