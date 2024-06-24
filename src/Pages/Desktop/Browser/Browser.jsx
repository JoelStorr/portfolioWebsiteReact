import { useState } from "react";
import "./Browser.css";
import BrowserHeader from "./BrowserHeader/BrowserHeader";
import ShapeCSS from "./Websites/ShapeCSS";
import Portfolio from "./Websites/Portfolio";
import Audiophile from "./Websites/Audiophile";
import LinkShare from "./Websites/LinkShare";
import ThreeJSBall from "./Websites/ThreeJSBall";
import ThreeDTShirtDesigner from "./Websites/3dTShirtDesigner";
import { Outlet } from "react-router-dom";

export default function Browser({ width }) {
  const BrowserSite = {
    ShapeCSS: "ShapeCss",
    Portfolio: "Portfolio",
    Audiophile: "Audiophile",
    LinkShare: "LinkShare",
    ThreeJSBall: "ThreeJSBall",
    TShirtDesigner3D: "TShirtDesigner3D"

  };

  const [activeTab, setActiveTab] = useState(BrowserSite.LinkShare);

  // function displayWebPage() {
  //   switch (activeTab) {
  //     case BrowserSite.ShapeCSS:
  //       return <ShapeCSS />;
  //     case BrowserSite.Portfolio:
  //       return <Portfolio />;
  //     case BrowserSite.Audiophile:
  //       return <Audiophile />;
  //     case BrowserSite.LinkShare:
  //       return <LinkShare />;
  //     case BrowserSite.ThreeJSBall:
  //       return <ThreeJSBall />;
  //     case BrowserSite.TShirtDesigner3D:
  //       return <ThreeDTShirtDesigner />
  //   }
  // }

  return (
    <div className="browser">
      <BrowserHeader
        activeBrowserTab={activeTab}
        changeActiveTab={setActiveTab}
        browserSite={BrowserSite}
        width={width}
      />
      <div className="browserContent"><Outlet /></div>
    </div>
  );
}
