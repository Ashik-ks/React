import { useContext } from "react"
import { ThemeContext } from "./ThemUseContext"

export default function ThemedComponent(){

    const {theme} = useContext(ThemeContext)
    return(
<>
<h1 style={{backgroundColor : theme}}>Themed Component</h1>
</>
    )
}