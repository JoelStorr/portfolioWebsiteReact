import "./MainDesktop.css";

export default function MainDesktop({changeProgramm, programmEnum}) {



  return (
    <div className="mainDesktop">
      <div className="desktopSpacer"></div>

      <ul className="appIconList">
        <li onClick={() => changeProgramm(programmEnum.AppStore)}>
          <div className="appIconMoc"></div>
          <p>App Store</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.Browser)}>
          <div className="appIconMoc"></div>
          <p>Browser</p>
        </li>
        <li onClick={() => changeProgramm(programmEnum.Design)}>
          <div className="appIconMoc"></div>
          <p>Design</p>
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
