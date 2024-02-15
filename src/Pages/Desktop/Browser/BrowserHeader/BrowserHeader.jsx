import React from "react";
import "./BrowserHeader.css";

export default function BrowserHeader({
  activeBrowserTab,
  changeActiveTab,
  browserSite,
  width,
  setProgramm,
  Programm,
}) {
  return (
    <div className="browserHeader">
      <div className="tabRow">
        <div
          className={
            activeBrowserTab == browserSite.ShapeCSS
              ? "browserTab activeTab"
              : "browserTab"
          }
          onClick={() => changeActiveTab(browserSite.ShapeCSS)}
        >
          <h3>Shape CSS</h3>
        </div>
        <div
          className={
            activeBrowserTab == browserSite.Portfolio
              ? "browserTab activeTab"
              : "browserTab"
          }
          onClick={() => changeActiveTab(browserSite.Portfolio)}
        >
          <h3>Portfolio</h3>
        </div>
      </div>
      <div className="searchBar">
        {width <= 450 ? (
          <button onClick={()=>setProgramm(Programm.None)}>
            <img src='/images/icons/chevron-left-solid.svg'/>
            <p>Home</p>
          </button>
        ) : (
          <>
            <p className="backArrowBrowser navigationButton">&#10132;</p>
            <p className="navigationButton">&#x2794;</p>
            <p className="reloadArrowBrowser navigationButton">&#x27F3;</p>
          </>
        )}

        <div className="searchField">
          <p>www.{activeBrowserTab.toLowerCase()}.com</p>
        </div>
      </div>
    </div>
  );
}
