import React from "react";
import { Link } from "react-router-dom";
import '../BasicRouting1/BasicRouting1.css'

export default function Nav() {
    return(
        <nav>
                <ul>
                    <li><Link className="navitems" to={"/Home"}>Home</Link></li>
                    <li><Link className="navitems" to={"/About"}>About</Link></li>
                    <li><Link className="navitems" to={"/Dashboard"}>Dashboard</Link></li>
                </ul>
            </nav>
    )
}