import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function ThreeDTShirtDesigner() {
  const images = [
    {
      url: `/images/3dShirtDesigner/Home.png`,
      title: "3D Shirt Designer Home View",
    },
    {
      url: `/images/3dShirtDesigner/ColorEditor.png`,
      title: "3D Shirt Designer Color Editor View",
    },
    {
      url: `/images/3dShirtDesigner/ImageUpload.png`,
      title: "3D Shirt Designer Image Upload Editor View",
    },
    {
      url: `/images/3dShirtDesigner/ImageTexture.png`,
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
        <h3>Über das Projekt</h3>
        <p>
          Das Shirt Designer Projekt ist als Teil meines Interesses an 3D im Web
          entstanden und basiert auf einem JavaScript Mastery Tutorial. In
          diesem habe ich mich mit der React Animations Bibliothek Framer Motion
          beschäftigt, um der UI eine interaktivere Form zu geben. Hierbei setzt
          das Projekt auf das React Three Fiber Paket (R3F) um das 3D nahtlos in
          das React Ökosystem einzubinden. 
          <br/> <br/>
          Besonders interessant war hierbei das
          Verändern von 3D Objekten auf Basis der Nutzereingabe und das
          Platzieren von Bildern auf dem 3D Objekt.
        </p>
      </div>
    </div>
  );
}
