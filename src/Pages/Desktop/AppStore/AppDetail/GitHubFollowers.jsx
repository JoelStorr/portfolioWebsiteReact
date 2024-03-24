import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css";

export default function GitHubFollowers() {
  const slides = [
    {
      url: "images/GHFollowers/GHSearch.jpg",
      title: "SunFlower",
    },
    {
      url: "images/GHFollowers/GHProfile.jpg",
      title: "Mountanse",
    },
  ];

  return (
    <>
      <div className="appDetailHeader">
        <div className="appDetailAppIcon">GH</div>
        <div>
          <h1>GitHubFollowers</h1>
          <h3>GitHub Api Project(Sean Allen Tutorial)</h3>
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
          <p>GitHub API</p>
          <hr />
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
          GitHub Follower Tracker war eines der ersten Tutorialprojekte in die
          IOS Entwicklung. Die App ist Teil des GitHub Followers Kurs von Sean
          Allen. Dieser Kurs hat mir als Einführung in die Swift Programmierung
          gedient und mir die Entwicklungsumgebung näher gebracht. Als Teile des
          Kurses habe ich mich mit Swift UI auseinandergesetzt und mich mit dem
          laden von API Daten in einer IOS App vertraut gemacht. Ebenfalls habe
          ich das Navigieren über mehrere Seiten erlernt als auch das dynamische
          Laden von Bildern aus dem Web. Die App kommt ebenfalls mit einem
          System zum automatischen Nachladen von Nutzern, wenn man am Ende der
          geladenen Follower angekommen ist.
        </p>
      </div>
    </>
  );
}
