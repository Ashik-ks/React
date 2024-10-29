import React from "react";
import { useState } from "react";

export default function controlledComponent() {

    const [InputData, SetInputData] = useState('')

    const handleClick = (e) => {
        SetInputData(e.target.value)
    }

    const Formdata = () => {
        alert(`input value :  ${InputData}`)
    }

    return (
        <>
            <form onSubmit={Formdata}>
                <input type="text" onChange={handleClick} />
                <input type="submit" />
            </form>
        </>
    )
}