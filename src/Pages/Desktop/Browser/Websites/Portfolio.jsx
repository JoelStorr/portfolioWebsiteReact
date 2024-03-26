import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function Portfolio() {
  const images = [
    {
      url: `./images/shapecss/shapecss1.png`,
      title: "SunFlower",
    },
    {
      url: "./images/shapecss/shapecss2.png",
      title: "SunFlower",
    },
    {
      url: "./images/shapecss/shapecss3.png",
      title: "SunFlower",
    },
  ];

  return (
    <div className="websiteContent">
      <h1>Portfolio</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fullHeightImage={false} />
        </div>
        <div className="websiteContentUsedTech">
          <h3>Benutzte Technologien</h3>
          <ul>
            <li>Vue JS Frontend Library</li>
            <li>Matter JS (physics library)</li>
          </ul>
          <a href="https://github.com/JoelStorr/shape-css" target="blank">GitHub Repo</a>
        </div>
      </div>
      <div className="websiteContentAbout">
        <h3>Über das Projeckt</h3>
        <p>
          Für mein Portfolio habe ich React als Frontend Technologie gewählt,
          das sich vom Design an die Mac OS Oberfläche anlehnt. Anstelle eines
          Router basierten Systems habe ich einen One Pager gewählt, in dem
          mehrere Komponenten übereinandergelegt werden können.
        </p>
        <p>
          Das Ziel des Projektes war es, eine ansprechende und auffallende UI zu
          erstellen, die mein technisches Interesse aufzeigt, um die einzelnen
          Bereiche meines Wissens strukturiert darzustellen. Daher spaltet sich
          das Projekt auch in den App Store, für die mobile Entwicklung, den
          Browser, für meine Webprojekte und den Code Editor, für weitere
          Experimente und Backend Code, auf.
        </p>
        <p>
          Mit diesem Projekt habe ich meine Kenntnisse in einem weiteren
          Frontend Framework vertieft und mich im Responsive Design weiter
          entwickelt, um die App nicht nur für den Desktop zu programmieren.
          Hierbei passt sich nicht nur die UI auf den verschiedenen Geräten,
          sondern auch das Nutzererlebnis an, um das Navigieren durch die
          einzelnen Bereiche der Seite zu vereinfachen.
        </p>
      </div>
    </div>
  );
}
