import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function ShapeCSS() {
  const images = [
    {
      url: "./images/shapecss/shapecss1.png",
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
      <h1>Shape CSS</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fullHeightImage={false} />
        </div>
        <div className="websiteContentUsedTech">
          <h3>Used Tech</h3>
          <ul>
            <li>Vue JS Frontend Library</li>
            <li>Matter JS (physics library)</li>
          </ul>
          <div className="repoLinkHolder">
            <a href="https://github.com/JoelStorr/shape-css">GitHub Repo</a>
            <a href="https://github.com/JoelStorr/shape-css">Live Example</a>
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
        <p>
          ShapeCSS ist als Abschluss Projekt für mein CS50 Zertifikat
          entstanden. Mein Ziel war, es ein SPA zu entwickeln welches dem Nutzer
          unterstützt einige CSS Effekte visuell über die UI zu erzeugen.
          Zusätzlich reflektiert die UI einen Code Block den der Nutzer per
          Click kopieren und in sein eigenes Projekt einfügen kann.
        </p>
        <h3>Benutze Technologien:</h3>
        <p>
          Für dieses Projekt habe ich mich für eine VueJS Frontend entscheiden,
          welches gebrauch vom Vue Router macht, um einen fließenden Übergang
          zwischen den Seiten zu schaffen, ohne ein neu Laden der Seite zu
          erzwingen. Für eine visuell spannenderen Projekt Einführung habe ich
          außerdem auf eine 2D Physik Engine gesetzt, welche die Interaktiven
          formen auf der Startseite generiert und verwaltet.
        </p>
        <h3>Gelerntes</h3>
        <p>
          Im Zuge dieses Projekt habe ich mein wissen, über Frontend
          Technologien, wie VueJS vertieft und habe, mich mit der Integration
          von Framework fremden NPM packten in ein bestehendes Vue Projekt
          beschäftigt.
        </p>
        <h3>Responsive Design</h3>
        <p>
          Da die Tools einen eher geringen Nutzen auf Mobilen entgräten
          besitzen, habe ich mich gegen eine mobile Optimierung entscheiden,
          stattdessen zeigt die App auf einem Smartphone einen Infotext, mit der
          Möglichkeit den Link zur Seite zu Kopieren und für später zu
          speichern.
        </p>
      </div>
    </div>
  );
}
