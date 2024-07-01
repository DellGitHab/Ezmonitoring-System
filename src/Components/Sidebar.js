import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import pnp from "./pnp.png";


function Sidebar() {
    return (
        
        <div className="Sidebar">
            <img src={pnp} alt="EZMonitoring Logo"
            className="pnp" />
            <p className="Ezmonitor">EZMonitoring</p>
            <ul className="SidebarList">
            {SidebarData.map((val, key)=> {
                return (
                <li key={key} 
                className="row"
                onClick={()=> {window.location.pathname = val.link}}> 
                
                <div id="icon">
                    {val.icon}
                </div>
                <div id="title">
                    {val.title}
                </div>
                </li>
                );
            })}
            </ul>
        </div>

    )
}

export default Sidebar