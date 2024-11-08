
import { useContext } from "react"
import { ThemeContext } from "./ThemUseContext"

export default function ThemedSelectorComponent(){

    const {SetTheme} = useContext(ThemeContext)
    return(
<>
<button onClick={() =>{SetTheme('black')}}>Dark Theme</button>
<button onClick={() =>{SetTheme('red')}}>Red Theme</button>
<button onClick={() =>{SetTheme('blue')}}>Blue Theme</button>
<button onClick={() =>{SetTheme('green')}}>Green Theme</button>
<button onClick={() =>{SetTheme('yellow')}}>Yellow Theme</button>

</>
    )
}

