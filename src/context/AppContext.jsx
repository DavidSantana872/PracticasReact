import React, {useState} from "react";
import { counterContext } from "./counterContext";
const AppContext = ({children}) => {
    const [MostrarMenu, setMostrarMenu] = useState(false)
    return(
        <counterContext.Provider value={{MostrarMenu, setMostrarMenu}}>
            {children}
        </counterContext.Provider>
    )
}
export default AppContext;