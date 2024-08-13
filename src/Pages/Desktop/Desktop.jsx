import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useParams, redirect, useNavigate } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import MainDesktop from "./MainDesktop/MainDesktop";
import AppBar from "./AppBar/AppBar";
import "./Desktop.css";
import AppStore from "./AppStore/AppStore";
import Browser from "./Browser/Browser";
import Kontakt from "./KontaktApp/Kontakt";
import XCode from "./XCode/XCode";
import Widgets from "./Widgets/Widgets";
// NOTE: App Store
import WhenIChanged from "./AppStore/AppDetail/WhenIChanged";
import IssueTracker from "./AppStore/AppDetail/IssueTracker";
import DubDubGrub from "./AppStore/AppDetail/DubDubGrub";
import GitHubFollowers from "./AppStore/AppDetail/GitHubFollowers";

// NOTE: Browser
import LinkShare from "./Browser/Websites/LinkShare";
import Audiophile from "./Browser/Websites/Audiophile";
import ThreeDTShirtDesigner from "./Browser/Websites/3dTShirtDesigner";
import ShapeCSS from "./Browser/Websites/ShapeCSS";
import ThreeJSBall from "./Browser/Websites/ThreeJSBall";
import Portfolio from "./Browser/Websites/Portfolio";
import Weread from "./Browser/Websites/Weread";

function Desktop() {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  
  const queryParameters = new URLSearchParams(window.location.search);
  let page = queryParameters.get("page");
  let navigate = useNavigate()
  console.log("Page:  " + page)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  function handleReroute(page){
    if (page) {
      console.log("run redirect")

      const newPath = Array.from(page).map((char)=>{
        if(char === '-'){
          return '/'
        }
        return char
      }).join('')

      console.log(newPath);

      navigate("/"+newPath);
    }
  }

  useEffect(() => {
    
    
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(()=>{
     handleReroute(page);
  }, [page])



  return (
    <>
      <div
        className={
          location.pathname === "/"
            ? "programmHolder"
            : location.pathname === "/about"
            ? "programmHolderSmall programmHolderActive"
            : "programmHolder programmHolderActive"
        }
      >
        <Routes>
          <Route path="/" element={<></>} />

          {/* NOTE: AppStore Routes */}
          <Route path="/appstore" element={<AppStore width={width} />}>
            <Route element={<WhenIChanged />} index={true} />
            <Route path="issue" element={<IssueTracker />} />
            <Route path="dubdub" element={<DubDubGrub />} />
            <Route path="gh" element={<GitHubFollowers />} />
            <Route path="sidebar" element={<></>} />
          </Route>
          {/* NOTE: Browser Routes  */}
          <Route path="/browser" element={<Browser width={width} />}>
            <Route index element={<LinkShare />} />
            <Route path="weread" element={<Weread />} />
            <Route path="audiophile" element={<Audiophile />} />
            <Route path="shirtdesigner" element={<ThreeDTShirtDesigner />} />
            <Route path="shapecss" element={<ShapeCSS />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="threejsgame" element={<ThreeJSBall />} />
          </Route>
          {/* NOTE: XCode Routes */}
          <Route path="/xcode" element={<XCode width={width} />} />

          <Route path="/about" element={<Kontakt width={width} />} />
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
