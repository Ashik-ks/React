import React from "react";
import { useState } from "react";

export default function UseState(){
    console.log("component rendering")

const [Count,SetCount] = useState(0)

const handleClick = () => {
    console.log("button clicked")
    SetCount(Count + 1) // 0 -> 1 , during setcount initial value 0 update to 1
    SetCount(Count + 1) // 0 -> 1 , here also updating the initaial value 0
}

    return(
        <>
        <div>Count : {Count}</div>
        <button onClick={handleClick}>Click Here</button>
        </>
    )
}
