import "./MainDesktop.css";

export default function MainDesktop({changeProgramm, programmEnum}) {



  return (
    <div className="mainDesktop">
      <div className="desktopSpacer"  onClick={() => changeProgramm(programmEnum.None)}></div>

      <ul className="appIconList">
        <li onClick={() => changeProgramm(programmEnum.AppStore)}>
          <div className="appIconMoc">
            <img src="/images/icons/compass-drafting-solid.svg"/>
          </div>
          <p>App Store</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.Browser)}>
          <div className="appIconMoc"></div>
          <p>Browser</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.XCode)}>
          <div className="appIconMoc"></div>
          <p>XCode</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.Writing)}>
          <div className="appIconMoc"></div>
          <p>Writing</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.Kontakt)}>
          <div className="appIconMoc"></div>
          <p>Kontakt</p>
        </li>
      </ul>
    </div>
  );
}
