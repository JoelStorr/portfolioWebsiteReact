import React, { useState, useRef } from "react";
import {Link, useLocation} from 'react-router-dom'
import "./BrowserHeader.css";

export default function BrowserHeader({
  activeBrowserTab,
  changeActiveTab,
  browserSite,
  width,
}) {
  let [showTabs, setShowTabs] = useState(false);

  const location = useLocation()

  function switchTabs() {
    setShowTabs(!showTabs);
  }

  function isMobile() {
    if (width < 500) {
      return (
        <div className="browserHeader">
          <div className="tabRow">
            <Link to="/browser" replace>
              <div
                className={
                  location.pathname === "/browser"
                    ? "browserTab activeTab"
                    : "browserTab"
                }
                onClick={() => {
                  changeActiveTab(browserSite.LinkShare);
                }}
              >
                <h3>LinkShare</h3>
              </div>
            </Link>
            <div
              className={
                activeBrowserTab != browserSite.LinkShare
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={switchTabs}
            >
              <h3>More</h3>
            </div>
            {showTabs && (
              <div className="moreTab" onClick={switchTabs}>
                <div className="moreTabContainer">
                  <ul>
                    <Link
                      to="/browser/audiophile"
                      replace
                      className={
                        location.pathname === "/browser/audiophile"
                          ? "activeli link"
                          : "link"
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.Audiophile);
                        switchTabs();
                      }}
                    >
                      Audiophile
                    </Link>
                    <Link
                      to="/browser/shirt-designer"
                      replace
                      className={
                        location.pathname == "browser/shirt-designer"
                          ? "activeli link"
                          : "link"
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.TShirtDesigner3D);
                        switchTabs();
                      }}
                    >
                      3D T-Shirt Dessigner
                    </Link>
                    <Link
                      to="/browser/portfolio"
                      repalce
                      className={
                        location.pathname == "/browser/portfolio"
                          ? "activeli link"
                          : "link"
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.Portfolio);
                        switchTabs();
                      }}
                    >
                      Portfolio
                    </Link>
                    <Link
                      to="/browser/shape-css"
                      replace
                      className={
                        location.pathname == "/browser/shape-css"
                          ? "activeli link"
                          : "link"
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.ShapeCSS);
                        switchTabs();
                      }}
                    >
                      Shape CSS
                    </Link>

                    <Link
                      to="/browser/threejs-game"
                      replace
                      className={
                        location.pathname == "/browser/threejs-game"
                          ? "activeli link"
                          : "link"
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.ThreeJSBall);
                        switchTabs();
                      }}
                    >
                      ThreeJS Game
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="searchBar">
            {width <= 825 ? (
              <Link to="/" className="homeLink">
                <button>
                  <img src="/images/icons/chevron-left-solid.svg" />
                  <p>Home</p>
                </button>
              </Link>
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
    } else {
      return (
        <div className="browserHeader">
          <div className="tabRow">
              <Link to="/browser">
            <div
              className={
                activeBrowserTab == browserSite.LinkShare
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.LinkShare)}
            >
                <h3>LinkShare</h3>
            </div>
              </Link>
              <Link to="/browser/audiophile" replace>
            <div
              className={
                activeBrowserTab == browserSite.Audiophile
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.Audiophile)}
            >
                <h3>Audiophile</h3>
            </div>
              </Link>
              <Link to="/browser/shirt-designer" replace>
            <div
              className={
                activeBrowserTab == browserSite.TShirtDesigner3D
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.TShirtDesigner3D)}
            >
                <h3>3D T-Shirt Designer</h3>
            </div>
              </Link>
              <Link to="/browser/shape-css" replace>
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
              </Link>
              <Link to="/browser/portfolio" replace>
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
              </Link>

              <Link to="/browser/threejs-game" replace>
            <div
              className={
                activeBrowserTab == browserSite.ThreeJSBall
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.ThreeJSBall)}
            >
                <h3>ThreeJS Game</h3>
            </div>
              </Link>
          </div>
          <div className="searchBar">
            {width <= 825 ? (
              <Link to="/" className="homeLink">
                <button>
                  <img src="/images/icons/chevron-left-solid.svg" />
                  Home
                </button>
              </Link>
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
  }

  return isMobile();
}
