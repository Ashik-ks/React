import { useState } from "react";

export default function FormComponent({onSubmit}) {

    console.log("From Component Rendering...");

    const [inputData, setInputdata] = useState(null);

    const handleInputChange = (e) => {
        console.log("value : ", e.target.value);
        setInputdata(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted...");

        onSubmit(inputData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}