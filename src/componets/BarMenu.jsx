import React, { useContext } from "react";
import "./style.css"
import { counterContext } from "../context/counterContext";
const StyleNavegacion = {
    background : "white",
    color : "black",
    fontSize : "2rem",
    fontWeight : "900",
    height : "100%",
    position : "fixed",
    top : "0px",
    margin : "0px",
}
const BarMenu = () => {
    const {MostrarMenu} = useContext(counterContext)
    return(
        <>
            <nav className="MenuBarra"  style = {{display : MostrarMenu === false ? "none" : "block", StyleNavegacion}}>
                <ul style={{listStyle : "none", padding : "0px",display : "flex", flexDirection : "column", height : "100%"}}>
                    <li style = {{width : "auto", paddingLeft : "90px",marginBottom : "80px", marginTop: "80px"}}>Inicio</li>
                    <li style = {{width : "auto", paddingLeft : "90px",marginBottom : "80px"}}>Productos</li>
                    <li style = {{width : "auto", paddingLeft : "90px",marginBottom : "80px"}}>Contacto</li>
                    <li style = {{width : "auto", paddingLeft : "90px",marginBottom : "80px"}}>Sucursales</li>
                </ul>
            </nav>
        </>
    )
}
export default BarMenu;