import { useState, useEffect} from "react";

export default function UseCallbackComponent() {

    const [Count, SetCount] = useState(0);
    console.log("component rendering")

    const handleClick = () => {
        SetCount((prevcount) => prevcount + 1)
    }

    useEffect(() => {
        console.log("useeffect component rendering")
    }, [handleClick])

    return (
        <>
            <div>count : {Count}</div>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}