import React from "react";
import { useState,useMemo } from "react";


const users = [

    {
        id : 1,
        name : "john doe",
        role : "Admin",
    },
    {
        id : 1,
        name : "jane smith",
        role : "User",
    },
    {
        id : 1,
        name : "alice johnson",
        role : "Admin",
    },
    {
        id : 1,
        name : "bob brown",
        role : "User",
    },
    {
        id : 1,
        name : "charlie lee",
        role : "Admin",
    },
    {
        id : 1,
        name : "diana doe",
        role : "User",
    }
]


export default function Usememocomponent () {

    const [searchterm,Setsearchterm] = useState('')
    const [filterrole,Setfilterrole] = useState('All')
    const [count,Setcount] = useState(0)

  const filteredusers = users.filter((user) => {
    console.log("filter component rendering")

    const searchmatch = user.name.toLowerCase().includes(searchterm.toLocaleLowerCase()) ;
    console.log("search match rendering")

    const filtermatch = filterrole === 'All' || user.role === filterrole;
    console.log("filtermatch rendering")

    return searchmatch && filtermatch

  })

  return (
    <>
    <input type="text" value={searchterm} onChange={(e)=>Setsearchterm(e.target.value)} />
    <select name="" id="" value={filterrole} onChange={(e)=>{Setfilterrole(e.target.value)}}>
        <option value="All">All</option>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
    </select>

    <ul>
        {
            filteredusers.map((user) =>{
               return <li>{user.name}-{user.role}</li>
            })
        }
    </ul>

    <button onClick={()=>Setcount(count+1)}>count: {count}</button>
    </>
  )

}
//here when count presses the filter function also recomputing its not necessary
//avoid unnecessary computions -usememo,
//avoid unnecessary recreations of component -useCallback