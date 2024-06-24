import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function ShapeCSS() {
  const images = [
    {
      url: "/images/shapecss/shapecss1.png",
      title: "SunFlower",
    },
    {
      url: "/images/shapecss/shapecss2.png",
      title: "SunFlower",
    },
    {
      url: "/images/shapecss/shapecss3.png",
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
          <h3>Benutzte Technologien</h3>
          <ul>
            <li>Vue JS Frontend Library</li>
            <li>Matter JS (physics library)</li>
          </ul>
          <div className="repoLinkHolder">
            <a href="https://github.com/JoelStorr/shape-css" target="blank">
              GitHub Repo
            </a>
            <a href="https://joelstorr.github.io/shape-css-gp/" target="blank">
              Live Example
            </a>
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
        <h3>Über das Projekt</h3>
        <p>
          Shape CSS ist als mein Abschlussprojekt für das Harvard CS50
          Zertifikat auf edX entstanden. Das Ziel war es, eine SPA zu
          entwickeln, die den Nutzer unterstützt, eigene CSS Effekte visuell
          über die UI zu erzeugen. Gleichzeitig reflektiert die UI einen Code
          Block, den der Nutzer per Click kopieren und in sein eigenes Projekt
          einfügen kann.
        </p>
        <h3>Benutze Technologien:</h3>
        <p>
          Für dieses Projekt habe ich mich für ein VueJS Frontend entschieden,
          das gebrauch vom Vue Router macht, um einen fließenden Übergang
          zwischen den Seiten zu schaffen, ohne ein erneutes Laden der Seite zu
          erzwingen. Für eine visuell spannendere Projekteinführung habe ich
          außerdem auf eine 2D Physics Engine gesetzt, die die interaktiven
          Formen auf der Startseite generiert und verwaltet.
        </p>
        <h3>Gelerntes</h3>
        <p>
          Im Zuge dieses Projektes habe ich mein Wissen über Frontend
          Technologien, wie VueJS, vertieft und mich mit der Integration von
          Framework fremden NPM Paketen in ein bestehendes Vue Projekt
          beschäftigt.
        </p>
        <h3>Responsive Design</h3>
        <p>
          Da die Tools einen eher geringen Nutzen auf mobilen Endgeräten
          besitzen, habe ich mich gegen eine mobile Optimierung entschieden.
          Stattdessen zeigt die App auf einem Smartphone einen Infotext an, mit
          der Möglichkeit den Link zur Website zu kopieren.
        </p>
      </div>
    </div>
  );
}
