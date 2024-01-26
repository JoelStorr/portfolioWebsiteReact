
import React from "react";
import TopBar from "./TopBar/TopBar";
import "./Desktop.css";

function Desktop (){


    return (
        <div className="desktop">
           <TopBar />
           <div className="mainDeskTop">
                <p> DeskTop</p>
           </div>
           <div className="appBar">
                <p>App Bar</p>
           </div>
        </div>
    )
}



export default Desktop;