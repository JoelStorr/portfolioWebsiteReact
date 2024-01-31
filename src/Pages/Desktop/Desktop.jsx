import  { useState } from "react";
import TopBar from "./TopBar/TopBar";
import MainDesktop from "./MainDesktop/MainDesktop";
import AppBar from "./AppBar/AppBar";
import "./Desktop.css";
import AppStore from "./AppStore/AppStore";
import Browser from "./Browser/Browser";
import Kontakt from "./KontaktApp/Kontakt";




function Desktop() {

    const Programm = {
      None: "None",
      AppStore: "AppStore",
      Browser: "Browser",
      Design: "Design",
      Writing: "Writing",
      Kontakt: "Kontakt"
    };

    const [programm, setProgramm] = useState(Programm.None)




    function changeSowftware(newProgramm){
        if (newProgramm in Programm) {
            setProgramm(newProgramm)
        }
    }


    function renderProgramm(){
        switch(programm){
            case Programm.None:
                return <></>
            case Programm.AppStore:
                return <AppStore />
            case Programm.Browser:
                return <Browser />
            case Programm.Design:
                return <Design />
            case Programm.Writing:
                return <Writing />    
            case Programm.Kontakt:
              return <Kontakt />
        }
    }


  return (
    <>
      <div
        className={
          programm == Programm.None
            ? "programmHolder"
            : "programmHolder programmHolderActive"
        }

      >
        {renderProgramm()}
      </div>
      <div className="desktop">
        <TopBar />
        <MainDesktop changeProgramm={changeSowftware} programmEnum={Programm} />
        <AppBar changeProgramm={changeSowftware} programmEnum={Programm} />
      </div>
    </>
  );
}

export default Desktop;
