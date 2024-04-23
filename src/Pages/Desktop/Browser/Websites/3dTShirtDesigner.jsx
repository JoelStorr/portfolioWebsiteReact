import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function ThreeDTShirtDesigner() {
  const images = [
    {
      url: `./images/3dShirtDesigner/Home.png`,
      title: "3D Shirt Designer Home View",
    },
    {
      url: `./images/3dShirtDesigner/ColorEditor.png`,
      title: "3D Shirt Designer Color Editor View",
    },
    {
      url: `./images/3dShirtDesigner/ImageUpload.png`,
      title: "3D Shirt Designer Image Upload Editor View",
    },
    {
      url: `./images/3dShirtDesigner/ImageTexture.png`,
      title: "3D Shirt Designer Image Shirt Texture View",
    },
  ];

  return (
    <div className="websiteContent">
      <h1>3D T-Shirt Designer</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fit={true} fullHeightImage={true} />
        </div>
        <div className="websiteContentUsedTech">
          <h3>Benutzte Technologien</h3>
          <ul>
            <li>React</li>
            <li>React Three Fiber</li>
            <li>Three JS</li>
            <li>Framer Motion</li>
            <li>Tailwindcss</li>
          </ul>
          <div className="repoLinkHolder">
            <a
              href="https://github.com/JoelStorr/TShirtShop-R3FTutorial"
              target="blank"
            >
              GitHub Repo
            </a>
            <a
              href="https://joelstorr.github.io/GHPageR3FTshirt/"
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
          Das 3D Browser Spiel ist als Teil des ThreeJS Journey Kurses von Bruno
          Simon entstanden. Hierbei setzt das Projekt auf das React Three Fiber
          Paket (R3F), das die Integration von ThreeJS in React Projekte
          vereinfacht. Hierbei lassen sich die 3D Elemente direkt in der JSX
          Syntax definieren. Das Spiel wird durch die Rapier Physics Engine
          betrieben, um die Kollision mit den Hindernissen zu berechnen.
          <br /> <br />
          Das Ziel dieses Projektes war es, mein Wissen in R3F zu vertiefen und
          mich mit der neuen Syntax vertraut zu machen. Gerendert wird das
          Projekt innerhalb eines HTML Canvas Elements. Hierbei baut ThreeJS auf
          dem Browser nativen WebGL auf, um 3D Erlebnisse in jedem modernen
          Browser zur Verfügung zu stellen.
        </p>
      </div>
    </div>
  );
}
