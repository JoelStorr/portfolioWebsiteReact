import { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import "./MainDesktop.css";

export default function MainDesktop({ width, changeProgramm, programmEnum }) {

  const location = useLocation();

  return (
    <div className="mainDesktop">
      {width <= 825 ? null : (
        <Link to="/" className={
         location.pathname === "/" ? "desktopSpacer noPointer" : "desktopSpacer"
        }>
          {/* <div
            className="desktopSpacer"
            // onClick={() => changeProgramm(programmEnum.None)}
          ></div> */}
        </Link>
      )}

      <ul className="appIconList">
        <li>
          <Link to="/appstore" className="routeLink">
            <div
              className="appIconMoc appStoreIcon"
              // onClick={() => changeProgramm(programmEnum.AppStore)}
            >
              <img src="/images/icons/compass-drafting-solid.svg" />
            </div>
            <p>App Store</p>
          </Link>
        </li>
        <li>
          <Link to="/browser" className="routeLink">
            <div
              className="appIconMoc browserIcon"
              onClick={() => changeProgramm(programmEnum.Browser)}
            >
              <img src="/images/icons/earth-europe-solid.svg" />
            </div>
            <p>Browser</p>
          </Link>
        </li>
        <li>
          <Link to="/xcode" className="routeLink">
            <div
              className="appIconMoc xcodeIcon"
              onClick={() => changeProgramm(programmEnum.XCode)}
            >
              <img src="/images/icons/code-solid.svg" />
            </div>
            <p>XCode</p>
          </Link>
        </li>
        {/* <li onClick={() => changeProgramm(programmEnum.Writing)}>
          <div className="appIconMoc"></div>
          <p>Writing</p>
        </li> */}
        <li>
          <Link to="/about" className="routeLink">
            <div
              className="appIconMoc addressIcon"
              onClick={() => changeProgramm(programmEnum.Kontakt)}
            >
              <img src="/images/icons/address-book-regular.svg" />
            </div>
            <p>About Me</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
