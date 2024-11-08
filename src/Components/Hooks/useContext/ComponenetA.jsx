import React from "react";
import { useContext } from "react";
import { mycontext } from "./useContext";

export default function ComponentA() {
    const contexttext = useContext(mycontext)
return(
    <>
    <div>component A : {contexttext}</div>
    </>
)
}