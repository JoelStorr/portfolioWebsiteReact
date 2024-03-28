import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function ThreeJSBall() {
  const images = [
    {
      url: `./images/threeJSBall/start.png`,
      title: "Editor View",
    },
    {
      url: `./images/threeJSBall/mid.png`,
      title: "Editor View",
    },
    {
      url: `./images/threeJSBall/end.png`,
      title: "User Card Preview",
    },
    
  ];

  return (
    <div className="websiteContent">
      <h1>Three JS Game</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fit={true} fullHeightImage={false} />
        </div>
        <div className="websiteContentUsedTech">
          <h3>Benutzte Technologien</h3>
          <ul>
            <li>React</li>
            <li>React Three Fiber</li>
            <li>React Three Rapier</li>
            <li>Three JS</li>
          </ul>
          <div className="repoLinkHolder">
            <a
              href="https://github.com/JoelStorr/R3F-Physics-Game"
              target="blank"
            >
              GitHub Repo
            </a>
            <a
              href="https://joelstorr.github.io/R3F-Marble-Game/"
              target="blank"
            >
              Live Example
            </a>
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
        <h3>Über das Projeckt</h3>
        <p>
          Das 3D Browser Spiel ist als Teil des ThreeJS Journy Kurses von Bruno
          Simon entstanden. Hierbei setzt das Projekt auf das React Three Fiber
          Paket (R3F), das die Integration von ThreeJS in React Projekte
          vereinfacht. Das Spiel wird durch die Rapier Physik Engine betrieben,
          um die Kollisionen mit den Hindernissen zu betreiben. 
          <br/> <br/>
          Das Ziel dieses
          Projektes wer es, mein Wissen in R3F zu vertiefen und mich mit der
          neuen Syntax vertraut zu machen. Gerendert wird das Projekt innerhalb
          eines HTML Canvas elements, wobei ThreeJS auf dem Browser nativen
          WebGL aufbaut, um das 3D Erlebnis in jedem modernen Browser zur
          Verfügung zu stellen.
        </p>
      </div>
    </div>
  );
}
