import React from "react";

import "./MainDesktop.css";

export default function MainDesktop(props) {


   



  return (
    <div className="mainDesktop">
      <div className="desktopSpacer"></div>

      <ul className="appIconList">
        <li onClick={() => props.changeProgramm(props.programmEnum.AppStore)}>
          <div className="appIconMoc"></div>
          <p>App Store</p>
        </li>
        <li onClick={() => props.changeProgramm(props.programmEnum.Browser)}>
          <div className="appIconMoc"></div>
          <p>Browser</p>
        </li>
        <li onClick={() => props.changeProgramm(props.programmEnum.Design)}>
          <div className="appIconMoc"></div>
          <p>Design</p>
        </li>
        <li onClick={() => props.changeProgramm(props.programmEnum.Writing)}>
          <div className="appIconMoc"></div>
          <p>Writing</p>
        </li>
      </ul>
    </div>
  );
}
