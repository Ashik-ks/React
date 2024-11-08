import { createContext,useState } from "react";
import ThemedComponent from "./Themedomponent";
import ThemedSelectorComponent from "./ThemedSelectorComponent";

const ThemeContext = createContext('default')

export default function ThemeApp () {
    const [theme,SetTheme] = useState('red');

    return(
        <>
<ThemeContext.Provider value={{theme,SetTheme}}>
    <ThemedComponent />
    <ThemedSelectorComponent />
</ThemeContext.Provider>
        </>
    )
}

export {ThemeContext}