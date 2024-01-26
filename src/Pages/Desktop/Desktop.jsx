
import React from "react";
import TopBar from "./TopBar/TopBar";
import "./Desktop.css";

function Desktop (){


    return (
        <div className="desktop">
           <TopBar />
           <div>
                <p> DeskTop</p>
           </div>
           <div>
                <p>App Bar</p>
           </div>
        </div>
    )
}



export default Desktop;