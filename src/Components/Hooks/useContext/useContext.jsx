import ComponentB from "./ComponentB";
import ComponentA from "./ComponenetA";
import { createContext } from "react";

const mycontext = createContext('default')

function UseContextApp(){
return(
    <>
    <mycontext.Provider value="UseContext Hook">
        <ComponentA/>
        <ComponentB />
    </mycontext.Provider>
    </>
)
}

export {mycontext}
export default UseContextApp;