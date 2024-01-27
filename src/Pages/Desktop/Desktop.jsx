import React, { useState } from "react";
import TopBar from "./TopBar/TopBar";
import MainDesktop from "./MainDesktop/MainDesktop";
import AppBar from "./AppBar/AppBar";
import "./Desktop.css";
import AppStore from "./AppStore/AppStore";




function Desktop() {

    const Programm = {
      None: "None",
      AppStore: "AppStore",
      Browser: "Browser",
      Design: "Design",
      Writing: "Writing",
    };

    const [programm, setProgramm] = useState(Programm.None)




    function changeSowftware(newProgramm){
        if (newProgramm in Programm) {
            setProgramm(newProgramm)
        }
    }


  return (
    <>
      <div className="desktop">
        <TopBar />
        <MainDesktop changeProgramm={changeSowftware} programmEnum={Programm} />
        <AppBar />
      </div>

        {programm == Programm.AppStore ? <AppStore /> : <></>}

    </>
  );
}

export default Desktop;
