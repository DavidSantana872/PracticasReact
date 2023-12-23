import React, { useContext } from "react";
import { counterContext } from "../context/counterContext";

const StyleImg = {
    width : "40px",
    margin : "0px",
}
const StyleDiv = {
    position : "fixed",
    top : "0px",
    margin : "0px"
}

const BtnMenu = () => {
    const {MostrarMenu, setMostrarMenu} = useContext(counterContext)
    const handleClick = () => {
        setMostrarMenu(MostrarMenu === true ? false : true)
    }
    return(
        <>
            <div style={StyleDiv} onClick ={handleClick}>
                <img style={StyleImg}
                src="https://imgs.search.brave.com/oP7P5jIRVjvxL_nxQbQFg1ClqS4Twh8KXKCLi14gOaM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzE4LzA5LzE5/LzM2MF9GXzYxODA5/MTkyNF9TNHJBRHRK/RGl5aktVY2drWWdz/c1lnZ0Y1Tkd5dzYz/Wi5qcGc" 
                alt="Ups!"/>
            </div>
        </>
    )
}

export default BtnMenu;