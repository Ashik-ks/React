import React from "react";
import { useContext } from "react";
import { mycontext } from "./useContext";

export default function ComponentB() {
    const contexttext = useContext(mycontext)
return(
    <>
    <div>component B : {contexttext}</div>
    </>
)
}