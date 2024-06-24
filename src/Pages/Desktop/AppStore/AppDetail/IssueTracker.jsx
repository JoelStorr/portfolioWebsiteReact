import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css"


export default function IssueTracker() {





  const slides = [
    {
      url: "/images/IssueTracker/IssueTags.jpg",
      title: "SunFlower",
    },
    {
      url: "/images/IssueTracker/IssueIssueDetail.jpg",
      title: "Mountanse",
    },
    {
      url: "/images/IssueTracker/IssueAwards.jpg",
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
            Cross Plattform Projekt, um Softwareprobleme zu verfolgen (Hacking
            with Swift Tutorial)
          </h3>
          {/* TODO: Make sure linke goes to repo */}
          <a
            className="downloadBtn"
            href="https://github.com/JoelStorr/IssueTracker"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="appDetailDevider"></div>

      <div className="appDetailUsedTech">
        <h3>Benutzte Technologien</h3>
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
        <h3>Über das Projekt</h3>
        <p>
          <strong>Issue Tracker</strong> ist eine kleine solide App für IOS,
          iPad OS und Mac OS aus dem Portfolio Kurs von Hacking with Swift. Das
          Ziel ist es, eine iCloud App zu bauen, die es Nutzern ermöglicht,
          Probleme in Programmen mit dem Entwickler zu teilen. Daraufhin kann
          der Entwickler den Status dieser Probleme tracken und diese als
          behoben markieren. Da wo es möglich ist, ist die App so strukturiert,
          dass sie ihren UI Code aus einer einzigen Swift UI Basis bezieht.
        </p>
      </div>
    </>
  );
}
