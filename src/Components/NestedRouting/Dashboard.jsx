import {Route,Routes,Link} from "react-router-dom"
import Profile from "./Profile"
import Settings from "./Setting"
import "./NestedRouting.css"


export default function Dashboard() {
    return(
        <>
        <nav>
        <ul>
        <li className="navitems"><Link className="navitems" to={"/dashboard/Profile"}>profile</Link></li>
        <li className="navitems"><Link className="navitems" to={"/dashboard/Settings"}>Settings</Link></li>
        </ul>
        </nav>
       
        <section>
<Routes>
    <Route path={"/Profile"} exact element={<Profile />}></Route>
    <Route path={"/Settings"} exact element={<Settings />}></Route>
</Routes>
        </section>

        </>
    )
}