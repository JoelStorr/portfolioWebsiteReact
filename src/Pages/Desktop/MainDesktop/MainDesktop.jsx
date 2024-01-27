import React from "react";

import "./MainDesktop.css";

export default function MainDesktop() {
  return (
    <div className="mainDesktop">
      <div className="desktopSpacer"></div>

      <ul className="appIconList">
        <li>
          <div className="appIconMoc"></div>
          <p>App Store</p>
        </li>
        <li>
          <div className="appIconMoc"></div>
          <p>Browser</p>
        </li>
        <li>
          <div className="appIconMoc"></div>
          <p>Design</p>
        </li>
        <li>
          <div className="appIconMoc"></div>
          <p>Writing</p>
        </li>
      </ul>
    </div>
  );
}
