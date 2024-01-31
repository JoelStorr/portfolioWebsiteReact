import React from 'react'
import "./Kontakt.css"

export default function Kontakt() {
  return (
    <div className="kontaktApp">
      <div className="kontaktAppSideBar">
        <h2>Kontakt</h2>
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
        <div className="iconHolder">
            

          <img src="images/icons/github.svg" className="kontaktIcons" />
          <img src="images/icons/linkedin.svg" className="kontaktIcons" />
          <img src="images/icons/envelope-solid.svg" className="kontaktIcons" />
        </div>
      </div>
    </div>
  );
}

