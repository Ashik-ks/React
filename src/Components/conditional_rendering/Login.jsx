import React from "react";
import { useState } from "react";

function login() {


    const[isLoggedIn , setIsLoggedIn] = useState(false);
    let content;

    if(isLoggedIn){
        content = <h1>login successful!</h1>;
    }else{
        content = <h1>login unsuccessful!</h1>;
    }

    return(
        <>
        {content}
        </>
    )
}

export default login;