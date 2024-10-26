import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard"
import Nav from "./nav";



export default function NestedRouting1 () {
    return(
        <>
        <Router>
    
                <Routes>
                <Route path={"/"} exact element={<Nav />}></Route>
                    <Route path={"/Home"} exact element={<Home />}></Route>
                    <Route path={"/About"} exact element={<About />}></Route>
                    <Route path={"/dashboard/*"} exact element={<Dashboard />}></Route>
                </Routes>
           
        </Router>
        </>
    )
}