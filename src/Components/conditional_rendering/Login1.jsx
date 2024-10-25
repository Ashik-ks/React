import React from "react";
import { useState } from "react";

function login1() {


    const[isLoggedIn , setIsLoggedIn] = useState(true);
1
    

    return(
        <>
       {isLoggedIn ? (<h1> Login successfull!</h1>) : (<h1>Login unsuccessfull</h1>)} 
        </>
    )
}

export default login1;