import { useState, useEffect, useCallback } from "react";

export default function UseCallbackComponent1() {

    const [Count, SetCount] = useState(0);
    console.log("component rendering")

  const handleClick = useCallback(() => {
    SetCount((prevCOunt) => prevCOunt+1)
  },[])

    useEffect(() => {
        console.log("useEffect component rendering")
    }, [handleClick])

    return (
        <>
            <div>count : {Count}</div>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}