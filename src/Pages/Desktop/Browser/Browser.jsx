import { useState } from "react";
import "./Browser.css";
import BrowserHeader from "./BrowserHeader/BrowserHeader";
import ShapeCSS from "./Websites/ShapeCSS";
import Portfolio from "./Websites/Portfolio";
import Audiophile from "./Websites/Audiophile";
import LinkShare from "./Websites/LinkShare";
import ThreeJSBall from "./Websites/ThreeJSBall";

export default function Browser({ width, setProgramm, Programm }) {
  const BrowserSite = {
    ShapeCSS: "ShapeCss",
    Portfolio: "Portfolio",
    Audiophile: "Audiophile",
    LinkShare: "LinkShare",
    ThreeJSBall: "ThreeJSBall"
  };

  const [activeTab, setActiveTab] = useState(BrowserSite.ShapeCSS);

  function displayWebPage() {
    switch (activeTab) {
      case BrowserSite.ShapeCSS:
        return <ShapeCSS />;
      case BrowserSite.Portfolio:
        return <Portfolio />;
      case BrowserSite.Audiophile:
        return <Audiophile />;
      case BrowserSite.LinkShare:
        return <LinkShare />;
      case BrowserSite.ThreeJSBall:
        return <ThreeJSBall />;
    }
  }

  return (
    <div className="browser">
      <BrowserHeader
        activeBrowserTab={activeTab}
        changeActiveTab={setActiveTab}
        browserSite={BrowserSite}
        width={width}
        setProgramm={setProgramm}
        Programm={Programm}
      />
      <div className="browserContent">{displayWebPage()}</div>
    </div>
  );
}
