import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css"


export default function IssueTracker() {





  const slides = [
    {
      url: "images/IssueTracker/IssueTags.jpg",
      title: "SunFlower",
    },
    {
      url: "images/IssueTracker/IssueIssueDetail.jpg",
      title: "Mountanse",
    },
    {
      url: "images/IssueTracker/IssueAwards.jpg",
      title: "Lamps",
    },
   
  ];




    
  return (
    <>
      <div className="appDetailHeader">
        <div className="appDetailAppIcon">IT</div>
        <div>
          <h1>Issue Tracker</h1>
          <h3>
            Cross Plattform Project to track reported Issues(Hacking With Swift
            Tutorial)
          </h3>
          {/* TODO: Make sure linke goes to repo */}
          <a
            className="downloadBtn"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="appDetailDevider"></div>

      <div className="appDetailUsedTech">
        <h3>Used Tech</h3>
        <div className="appDetailUsedTechList">
          <p>Swift UI</p>
          <hr />
          <p>Universal App</p>
          <hr />
          <p>Cloud Kit</p>
        </div>
      </div>

      <div className="sliderContainer">
        <ImageCarousel slides={slides} file={false} fullHeightImage={false} />
      </div>
      <div className="appDetailDevider"></div>
      <div className="appDetailProjectDetail">
        {/* TODO: Dispaly Descriptions */}
        <h3>About the Project</h3>
        <p>
          Issue Tracker ist eine kleine solide App für IOS, iPad OS und Mac OS
          aus dem Portfolio Kurs von Hacking with Swift. Das Ziel ist es eine
          iCloud App zu bauen, welche es Nutzern möglich macht Probleme in
          Software mit dem Entwicklern zu teilen und dem Entwickler ermöglicht
          den Status dies Probleme zu tracken. Da wo es möglich ist die App so
          strukturiert, dass sie ihren UI Code aus einer SwiftUI-Basis zieht.
        </p>
      </div>
    </>
  );
}
