import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import '../BasicRouting/BasicRouting.css'


export default function BasicRouting () {
    return(
        <>
        <Router>
            <nav>
                <ul>
                    <li><Link to={"/Home"}>Home</Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                </ul>
            </nav>

            <section>
                <Routes>
                    <Route path={"/Home"} exact element={<Home />}></Route>
                    <Route path={"/About"} exact element={<About />}></Route>
                </Routes>
            </section>
        </Router>
        </>
    )
}

