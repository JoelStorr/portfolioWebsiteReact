import "./AppBar.css";

export default function AppBar({ changeProgramm, programmEnum }) {
  return (
    <div className="appBar">
      <div className="appContainer">
        <ul>
          <li onClick={() => changeProgramm(programmEnum.AppStore)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Browser)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Design)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Writing)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Kontakt)}>
            <div className="appIconMoc"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
