import { useState, useEffect } from "react";
import TopBar from "./TopBar/TopBar";
import MainDesktop from "./MainDesktop/MainDesktop";
import AppBar from "./AppBar/AppBar";
import "./Desktop.css";
import AppStore from "./AppStore/AppStore";
import Browser from "./Browser/Browser";
import Kontakt from "./KontaktApp/Kontakt";
import XCode from "./XCode/XCode";
import Widgets from "./Widgets/Widgets";

function Desktop() {
  const Programm = {
    None: "None",
    AppStore: "AppStore",
    Browser: "Browser",
    XCode: "XCode",
    Writing: "Writing",
    Kontakt: "Kontakt",
  };

  const [programm, setProgramm] = useState(Programm.None);

  const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);








  function changeSowftware(newProgramm) {
    if (newProgramm in Programm) {
      setProgramm(newProgramm);
    }
  }

  function renderProgramm() {
    switch (programm) {
      case Programm.None:
        return <></>;
      case Programm.AppStore:
        return <AppStore width={width} setProgramm={setProgramm} Programm={Programm} />;
      case Programm.Browser:
        return <Browser width={width} setProgramm={setProgramm} Programm={Programm}/>;
      case Programm.XCode:
        return (
          <XCode width={width} setProgramm={setProgramm} Programm={Programm} />
        );
      // case Programm.Writing:
      //     return <Writing />
      case Programm.Kontakt:
        return <Kontakt width={width} setProgramm={setProgramm} Programm={Programm}/>;
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
        <div className="widgetHolder">
          <Widgets width={width}/>
        </div>
        <MainDesktop changeProgramm={changeSowftware} programmEnum={Programm} width={width} />
        <AppBar changeProgramm={changeSowftware} programmEnum={Programm} />
      </div>
    </>
  );
}

export default Desktop;
