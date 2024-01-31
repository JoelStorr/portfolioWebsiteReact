import React from "react";
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <div className="kontaktApp">
      <div className="kontaktAppSideBar">
        <h2>About ME</h2>
        <hr />
        <ul>
          <li>Joel Storr</li>
        </ul>
      </div>
      <div className="kontaktAppMainView">
        <div className="kontaktAppHader">
          <img src="images/ProfilePic.PNG" />
          <h1>Joel Storr</h1>
        </div>

        <div className="iconRow">
          <div className="iconHolder">
            <img src="images/icons/github.svg" className="kontaktIcons" />
          </div>

          <div className="iconHolder">
            <img src="images/icons/linkedin.svg" className="kontaktIcons" />
          </div>

          <div className="iconHolder">
            <img
              src="images/icons/envelope-solid.svg"
              className="kontaktIcons"
            />
          </div>
        </div>
        <div className="kontaktAppAboutMe">
        <hr />
          <h2>About Me</h2>
          <p>
            I'm Joel. A IOS & FrontEnd Developer from Germany. <br/>

            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
            <br/>
            <a href="#">Lebenslauf</a>

          </p>
        </div>
      </div>
    </div>
  );
}
