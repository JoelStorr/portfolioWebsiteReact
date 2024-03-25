import "./AppBar.css";

export default function AppBar({ changeProgramm, programmEnum }) {
  return (
    <div className="appBar">
      <div
        className="appBarSpacer"
        onClick={() => changeProgramm(programmEnum.None)}
      >
        <p> </p>
      </div>
      <div className="appContainer">
        <ul>
          <li>
            <a href="https://github.com/JoelStorr" target="blank">
              <div className="appIconMoc browserIcon">
                <img src="/images/icons/github-color.svg" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://de.linkedin.com/in/joel-storr-190316137"
              target="blank"
            >
              <div className="appIconMoc browserIcon">
                <img src="/images/icons/linkedin-color.svg" />
              </div>
            </a>
          </li>
          <li>
            <a href="mailto:info@joelstorr.de">
              <div className="appIconMoc xcodeIcon">
                <img src="/images/icons/envelope-solid-color.svg" />
              </div>
            </a>
          </li>
          {/* <li onClick={() => changeProgramm(programmEnum.Writing)}>
            <div className="appIconMoc"></div>
          </li> */}
          {/* <li onClick={() => changeProgramm(programmEnum.Kontakt)}>
            <div className="appIconMoc addressIcon">
              <img src="/images/icons/address-book-regular.svg" />
            </div>
            <p></p>
          </li> */}
        </ul>
      </div>
      <div
        className="appBarSpacer"
        onClick={() => changeProgramm(programmEnum.None)}
      >
        <p> </p>
      </div>
    </div>
  );
}
