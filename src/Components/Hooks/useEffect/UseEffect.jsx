import { useEffect } from "react";

function UseEffectComponent() {
    console.log("Component rendered");

    useEffect(() => {
        console.log("UseEffect component rendered");
    }, []);

    return (
        <>
            <h1>UseEffect Component</h1>
        </>
    );
}

export default UseEffectComponent;
