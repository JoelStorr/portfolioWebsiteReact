import "./AppBar.css";
import { Link } from "react-router-dom";

export default function AppBar({ changeProgramm, programmEnum }) {
  return (
    <div className="appBar">
      <Link to="/" className="appBarSpacer">
        <p></p>
      </Link>
      <div className="appContainer">
        <ul>
          <li>
            <a href="https://github.com/JoelStorr" target="blank">
              <div className="appIconMoc browserIcon">
                <img src="/images/icons/github-color.svg" />
              </div>
            </a>
          </li>
          {/* <li>
            <a
              href="https://de.linkedin.com/in/joel-storr-190316137"
              target="blank"
            >
              <div className="appIconMoc browserIcon">
                <img src="/images/icons/linkedin-color.svg" />
              </div>
            </a>
          </li> */}
          <li>
            <a href="mailto:info@joelstorr.de">
              <div className="appIconMoc xcodeIcon">
                <img src="/images/icons/envelope-solid-color.svg" />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Link to="/" className="appBarSpacer">
        <p></p>
      </Link>
     
    </div>
  );
}