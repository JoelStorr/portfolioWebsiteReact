import React from "react";
import "./Kontakt.css";

export default function Kontakt({width, setProgramm, Programm}) {
  return (
    <div className="kontaktApp">
      {width <= 825 ? (
        <></>
      ) : (
        <div className="kontaktAppSideBar">
          <h2>About ME</h2>
          <hr />
          <ul>
            <li>Joel Storr</li>
          </ul>
        </div>
      )}

      <div className="kontaktAppMainView">
        {width <= 825 ? (
          <button onClick={() => setProgramm(Programm.None)}>
            <img src="/images/icons/chevron-left-solid.svg" />
            <p>Home</p>
          </button>
        ) : (
          <></>
        )}

        <div className="kontaktAppHader">
          <img src="images/ProfilePic.jpg" className="profileImage" />
          <div className="contactinfoDetail">
            <h1>Joel Storr</h1>
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
          </div>
        </div>

        <div className="kontaktAppAboutMe">
          <hr />
          <h2>Über mich</h2>
          <p>
            Als Frontend Entwickler und 3D Environment Artist für Videospiele
            und interaktive Medien liegt mein Interesse an spannenden UIs mit
            aktuellen Technologien.
            <br />
            <br />
            Als Ausgleich zu der PC Arbeit bin ich gerne mit unserem
            Familienhund in der Natur unterwegs. Tägliche Workouts und ein
            gesunder Ernährungsstil gehören zu meinem Tagesprogramm.
            <br />
            <br />
            Mein breites Interesse an verschiedensten Themen verfolge ich über
            Talks, Podcasts und Sachbücher. Dabei interessieren mich gerade die
            Bereiche des eigenständigen Lernens, der persönlichen
            Weiterentwicklung sowie der Einfluss digitaler Technologien auf
            unsere Gesellschaft.
            <br />
            <br />
            Musik und Bücher gehören seit meiner Kindheit zu meiner großen
            Leidenschaft. Gerade technischer Scifi und große Fantasy Welten
            faszinieren und inspirieren mich heute, kreative Lösungen zu finden.
            <br />
            <br />
            <a href="#">Lebenslauf</a>
          </p>
          <hr />

          <h2>3D</h2>
          <div className="YTLinkImage">
            <a
              href="https://www.youtube.com/watch?v=MpEaKqDmp1E"
              target="blank"
            >
              <img src="/images/3d/3dScene.png" className="threeDImage" />
              <img src="/images/icons/youtube.svg" className="YTIcon" />
            </a>
          </div>
          <hr />
          <h2>Skills</h2>
          <div>
            <h3>Spoken Languages</h3>
            <div className="kontakSkillSection">
              <div className="programmingLanguage">
                <img src="/images/icons/comment-regular.svg"></img>
                <p>German</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/comment-regular.svg"></img>
                <p>English</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Web Dev</h3>
            <div className="kontakSkillSection">
              <div className="programmingLanguage">
                <img src="/images/icons/html5.svg"></img>
                <p>HTML</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/css3.svg"></img>
                <p>CSS</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/js.svg"></img>
                <p>Java Script</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/react.svg"></img>
                <p>React JS</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/vuejs.svg"></img>
                <p>Vue JS</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/cube-solid.svg"></img>
                <p>Three JS</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/cube-solid.svg"></img>
                <p>Babylon JS</p>
              </div>
            </div>
            <h3>IOS Dev</h3>
            <div className="kontakSkillSection">
              <div className="programmingLanguage">
                <img src="/images/icons/swift.svg"></img>
                <p>Swift</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/compass-drafting-solid.svg"></img>
                <p>Swift UI</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/cloud-solid.svg"></img>
                <p>Cloud Kit</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/map-location-dot-solid.svg"></img>
                <p>Map Kit</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/vr-cardboard-solid.svg"></img>
                <p>Scene Kit</p>
              </div>
            </div>

            <h3>Cross Plattform</h3>
            <div className="kontakSkillSection">
              <div className="programmingLanguage">
                <img src="/images/icons/mobile-solid.svg"></img>
                <p>React Native</p>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/mobile-solid.svg"></img>
                <p>Flutter / Dart</p>
              </div>
            </div>
            <h3>Ausprobiert</h3>
            <div className="kontakSkillSection">
              <div className="programmingLanguage">
                <img src="/images/icons/php.svg"></img>
                <div>
                  <p>Php</p>
                  <p>Php Symfony</p>
                  <p>Twig</p>
                </div>
              </div>
              <div className="programmingLanguage">
                <img src="/images/icons/python.svg"></img>
                <div>
                  <p>Python</p>
                  <p>FastAPI</p>
                  <p>Flask</p>
                </div>
              </div>
            </div>
            {/*
            
            <div>
              <h3>Cross Platform</h3>
              <ul>
                <li>React Native</li>
                <li>Flutter / Dart</li>
              </ul>
            </div>
            <div>
              <h3>Experimented with</h3>
              <ul>
                <li>Php</li>
                <li>Php Symfony / Twig</li>
                <li>Python</li>
              </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
