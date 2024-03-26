import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function ThreeJSBall() {
  const images = [
    {
      url: `./images/linkshare/EditorView.png`,
      title: "Editor View",
    },
    {
      url: `./images/linkshare/ProfileView.png`,
      title: "Editor View",
    },
    {
      url: `./images/linkshare/UserCardPreview.png`,
      title: "User Card Preview",
    },
    {
      url: `./images/linkshare/login.png`,
      title: "Login View",
    },
    {
      url: `./images/linkshare/register.png`,
      title: "Register View",
    },
    {
      url: `./images/linkshare/EditorTablet.png`,
      title: "Editor Tablet View",
    },
    {
      url: `./images/linkshare/ProfileTablet.png`,
      title: "Profile Tablet View",
    },
    {
      url: `./images/linkshare/PreviewTablet.png`,
      title: "Profile Tablet View",
    },
  ];

  return (
    <div className="websiteContent">
      <h1>Three JS Game</h1>
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
          </ul>
          <div className="repoLinkHolder">
            <a href="https://github.com/JoelStorr/R3F-Physics-Game" target="blank">
              GitHub Repo
            </a>
            <a href="https://joelstorr.github.io/R3F-Marble-Game/" target="blank">
              Live Example
            </a>
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
        <h3>Über das Projeckt</h3>
        <p>
          Fullstack Projekt Linkshare ist eines der Frontend Mentor Guru
          Projekte in meinem Portfolio. Hierbei stellt Frontend Mentor die
          Designdateien und eine Projektübersicht zur Verfügung, so dass dem
          Challenge Teilnehmer selber frei gestellt wird, wie er zu dem
          gewollten Ergebnis kommt. Das Projekt selbst teilt sich in zwei Teile
          auf. Das Frontend besteht aus einem Server seitig gerenderten Nuxt
          Projekt. Dieses bezieht seine Daten durch ein Python FastAPI basiertes
          Backend.
          <br />
          <br />
          Als Kern des Frontends dient ein Pinia Store, der sowohl die
          Authentifizierung des Nutzers handhabt, als auch die Link- und
          Profildaten zur Verfügung stellt, die von der API stammen. Gemanagt
          wird die Überprüfung des Login Status über die in Nuxt integrierte
          Middleware. Hierbei wird auf den geschützen Seiten eine
          Authentifizierung, via API Abfrage, mit dazugehörigen JSON Web Token
          durchgeführt.
        </p>
        <p>
          Der Editor setzt neben einer Live Preview der Nutzerinformation auch
          auf ein Drag and Drop System zum Neuanordnen der Nutzerlinks. Hierfür
          verwendet die App das Vue.Draggable Paket. Dabei wird die Position mit
          an die API übertragen und beim nächsten Login auch wieder reflektiert.
          Eine Überprüfung der Nutzereingaben wird nutzerseitig ausgeführt bevor
          die Daten an den Server übertragen werden.
        </p>
        <p>
          Die App ist in der Lage das vom Nutzer hochgeladene Foto an die API zu
          übermitteln, und den vom Server kommenden Base64 String wieder in ein
          Bild zu konvertieren, das dem Nutzer im Frontend angezeigt werden
          kann.
        </p>
        <p>
          Die App ist sowohl für den Desktop, als auch für Tablet und Smartphone
          ausgelegt und passt die UI für das beste Nutzererlebnis an. So wird
          die Echtzeit Preview auf Smartphones entfernt, um mehr Raum für den
          Editor zu lassen.
        </p>
        <p>
          Das FastAPI Backend ist darauf ausgelegt einen JSON Web Token nach der
          Anmeldung zu generieren und auf den geschützten API Endpunkten zu
          verifizieren. In diesem Projekt habe ich auf eine einfache SQLite
          Datenbank gesetzt. Hierbei sind die Pfade zum Editieren der
          Informationen via Token Verifizierung gesichert. Das Backend speichert
          die Bilder als Base64 in einem eigenen Ordner auf dem Server und gibt
          diese auch als Base64 String wieder an das Frontend zurück.
        </p>
      </div>
    </div>
  );
}
