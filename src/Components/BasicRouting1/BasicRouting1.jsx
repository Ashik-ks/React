import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Nav from "./nav";
import '../BasicRouting1/BasicRouting1.css'


export default function BasicRouting1 () {
    return(
        <>
        <Router>
    
                <Routes>
                <Route path={"/"} exact element={<Nav />}></Route>
                    <Route path={"/Home"} exact element={<Home />}></Route>
                    <Route path={"/About"} exact element={<About />}></Route>
                </Routes>
           
        </Router>
        </>
    )
}