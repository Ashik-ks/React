import React from "react";
import { useState } from "react";

export default function UseState1() {

    const [Count, SetCount] = useState(0)

    const handleClick = () => {
        SetCount((prevcount) => prevcount + 1) // 0 -> 1 , update initial value o to 1
        SetCount((prevcount) => prevcount + 1) // 1 -> 2 , update value 1 to 2
    }

    return (
        <>
            <div>Count : {Count}</div>
            <button onClick={handleClick}>Click Here</button>
        </>
    )
}