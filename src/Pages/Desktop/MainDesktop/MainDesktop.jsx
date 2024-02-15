import { useEffect, useState } from "react";
import "./MainDesktop.css";

export default function MainDesktop({ changeProgramm, programmEnum }) {

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




  return (
    <div className="mainDesktop">
      {width <= 450 ? null : (
        <div
          className="desktopSpacer"
          onClick={() => changeProgramm(programmEnum.None)}
        ></div>
      )}

      <ul className="appIconList">
        <li>
          <div
            className="appIconMoc appStoreIcon"
            onClick={() => changeProgramm(programmEnum.AppStore)}
          >
            <img src="/images/icons/compass-drafting-solid.svg" />
          </div>
          <p>App Store</p>
        </li>
        <li>
          <div
            className="appIconMoc browserIcon"
            onClick={() => changeProgramm(programmEnum.Browser)}
          >
            <img src="/images/icons/earth-europe-solid.svg" />
          </div>
          <p>Browser</p>
        </li>
        <li>
          <div
            className="appIconMoc xcodeIcon"
            onClick={() => changeProgramm(programmEnum.XCode)}
          >
            <img src="/images/icons/code-solid.svg" />
          </div>
          <p>XCode</p>
        </li>
        {/* <li onClick={() => changeProgramm(programmEnum.Writing)}>
          <div className="appIconMoc"></div>
          <p>Writing</p>
        </li> */}
        <li>
          <div
            className="appIconMoc addressIcon"
            onClick={() => changeProgramm(programmEnum.Kontakt)}
          >
            <img src="/images/icons/address-book-regular.svg" />
          </div>
          <p>About Me</p>
        </li>
      </ul>
    </div>
  );
}
