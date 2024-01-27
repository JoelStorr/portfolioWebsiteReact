
import React from "react";
import TopBar from "./TopBar/TopBar";
import MainDesktop from "./MainDesktop/MainDesktop";
import AppBar from "./AppBar/AppBar";
import "./Desktop.css";

function Desktop (){


    return (
        <div className="desktop">
           <TopBar />
           <MainDesktop />
           <AppBar />
        </div>
    )
}



export default Desktop;