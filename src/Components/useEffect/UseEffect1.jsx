import { useEffect, useState } from "react";

function UseEffectComponent1() {
    console.log("Component rendered");

    const [datas, setDatas] = useState(null);

    useEffect(() => {
        function fetchData() {
            fetch('https://fakestoreapi.com/users')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((parsedDatas) => {
                    console.log("datas: ", parsedDatas);
                    setDatas(parsedDatas);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }

        fetchData();
    }, []);

    return (
        <>
            {datas ? (
                <div>{JSON.stringify(datas)}</div>
            ) : (
                <h1>UseEffect Component</h1>
            )}
        </>
    );
}

export default UseEffectComponent1;
