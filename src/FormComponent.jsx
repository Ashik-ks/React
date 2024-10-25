import { useState } from "react";

export default function FormComponent({onSubmit}) {

    console.log("From Component Rendering...");

    const [inputData, setInputdata] = useState({
        name : '',
        email : '',
        place : '',
        pincode : '',
    });

    const handleInputChange = (e) => {
        console.log("value : ", e.target.value);

        if(e.target.name === 'name'){
            
            setInputdata({
                ...inputData,
                name : e.target.value,
            })
        }
        if(e.target.name === 'email'){
            
            setInputdata({
                ...inputData,
                email : e.target.value,
            })
        }
        if(e.target.name === 'place'){
            
            setInputdata({
                ...inputData,
                place : e.target.value,
            })
        }
        if(e.target.name === 'pincode'){
            
            setInputdata({
                ...inputData,
                pincode : e.target.value,
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted...");

        onSubmit(inputData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" onChange={handleInputChange} />
                <input type="text" name="email" placeholder="Enter Your Email" onChange={handleInputChange} />
                <input type="text" name="place" placeholder="Enter Your Place" onChange={handleInputChange}/>
                <input type="text" name="pincode" placeholder="Enter Your Pincode" onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}