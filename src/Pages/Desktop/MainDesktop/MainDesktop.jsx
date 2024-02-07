import "./MainDesktop.css";

export default function MainDesktop({ changeProgramm, programmEnum }) {
  return (
    <div className="mainDesktop">
      <div
        className="desktopSpacer"
        onClick={() => changeProgramm(programmEnum.None)}
      ></div>

      <ul className="appIconList">
        <li onClick={() => changeProgramm(programmEnum.AppStore)}>
          <div className="appIconMoc appStoreIcon">
            <img src="/images/icons/compass-drafting-solid.svg" />
          </div>
          <p>App Store</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.Browser)}>
          <div className="appIconMoc browserIcon">
            <img src="/images/icons/earth-europe-solid.svg" />
          </div>
          <p>Browser</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.XCode)}>
          <div className="appIconMoc xcodeIcon">
            <img src="/images/icons/code-solid.svg" />
          </div>
          <p>XCode</p>
        </li>
        {/* <li onClick={() => changeProgramm(programmEnum.Writing)}>
          <div className="appIconMoc"></div>
          <p>Writing</p>
        </li> */}
        <li onClick={() => changeProgramm(programmEnum.Kontakt)}>
          <div className="appIconMoc addressIcon">
            <img src="/images/icons/address-book-regular.svg" />
          </div>
          <p>About Me</p>
        </li>
      </ul>
    </div>
  );
}
