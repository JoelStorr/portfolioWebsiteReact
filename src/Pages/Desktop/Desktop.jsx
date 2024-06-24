import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
  
  const [width, setWidth] = useState(window.innerWidth);

  const location = useLocation();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div
        className={
          location.pathname === "/"
            ? "programmHolder"
            : "programmHolder programmHolderActive"
        }
      >
        <Routes>
          <Route path="/" element={<></>} />

          <Route
            path="/appstore"
            element={<AppStore width={width}/>}
          />
          <Route
            path="/browser"
            element={<Browser width={width} />}
          />
          <Route
            path="/xcode"
            element={<XCode width={width} />}
          />
          <Route
            path="/about"
            element={<Kontakt width={width} />}
          />
        </Routes>
      </div>

      <div className="desktop">
        <TopBar />
        <div className="widgetHolder">
          <Widgets width={width} />
        </div>
        <MainDesktop width={width} />
        <AppBar />
        <h1 className="tagline">Frontend Developer</h1>
      </div>
    </>
  );
}

export default Desktop;
