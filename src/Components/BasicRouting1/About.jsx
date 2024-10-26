import React from "react";
import { useParams } from "react-router-dom";

export default function About() {
    const { username } = useParams(); // Destructure username from the params
    console.log("username: ", username);

    return (
        <h1>About {username}</h1>
    );
}
