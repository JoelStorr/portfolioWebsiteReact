import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function LinkShare() {
  const images = [
    {
      url: `/images/weread/home-header.png`,
      title: "Home Page",
    },
    {
      url: `/images/weread/home-page.png`,
      title: "Home Page",
    },
    {
      url: `/images/weread/home-login.png`,
      title: "Home View Login",
    },
    {
      url: `/images/weread/book-search.png`,
      title: "Search Results",
    },
  ];

  return (
    <div className="websiteContent">
      <h1>Weread</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fit={true} fullHeightImage={false} />
        </div>

        <div className="websiteContentUsedTech">
          <h3>Benutzte Technologien</h3>
          <ul>
            <li>React JS Frontend Library</li>
            <li>Next JS Full Stack Library</li>
            <li>React three fiber (R3f)</li>
            <li>Three JS</li>
            <li>MongoDB</li>
          </ul>
          <div className="repoLinkHolder">
            <a
              href="https://github.com/JoelStorr/weread-nextjs-mongodb"
              target="blank"
            >
              GitHub Repo
            </a>
            <a
              href="https://www.figma.com/proto/kpxTSAoXcT2F2os0zKkaGQ/WeRead?page-id=0%3A1&node-id=6-2&viewport=-7811%2C725%2C1.12&t=k3ZujQTloS0OsjSk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A2&show-proto-sidebar=1"
              target="blank"
            >
              Figma Designs
            </a>
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
        <h3>Über das Projekt</h3>
        <p>
          <b>Aktuelles Projekt (die Bilder sind erste Desings)</b> <br />
          WeRead ist eine sozialer Reading Tracker mit starkem Focus auf
          Community. Basierend auf der Google Books API können Bücher
          gespeichert und deren Lesefortschritt aufgezeichnet werden. Hierbei
          ist es wählbar, ob eine Leseliste privat oder für andere Nutzer
          einsehbar ist. Der Lesestatus der Bücher lässt sich in mehrere
          Bereiche unterteilen, wie „Am Lesen“, „Wunschliste“, „nicht beendet“
          oder „beendet“. Als weiteres Feature sollen Nutzer ihre Profile an
          ihren eigenen Geschmack anpassen können, um ein personalisiertes
          Erlebnis zu erhalten.
          <br />
          Um den Gemeinschaftsaspekt weiter in den Vordergrund zu rücken, können
          Nutzer eigene Lesegruppen erstellen, in denen sie mit der Community
          lesen können. Nach Beendigung des Buches hat man die Möglichkeit eine
          Rezension abzugeben, um das Buch für andere zu bewerten. Nutzer können
          ihren Lesefortschritt im Auge behalten, in dem sie sich jährliche
          Leseziele setzen. Dazu erhalten sie detaillierte Auswertungen ihrer
          Lesegewohnheiten.
          <br />
          Auf technischer Seite baut das Projekt auf Next.js als Fullstack
          System und einer Mongodb Datenbank auf, um für eine moderne und
          schnelle Entwicklungsumgebung zu sorgen. Dazu kommt Sass als
          Erweiterung zu CSS zum Einsatz. Für eine immersive Umgebung und
          interaktives Erlebnis setzte ich zusätzlich auf React Three Fiber
          (R3f) und Three.js, um mit webbasiertem 3D die UI zum Leben zu
          erwecken.
        </p>
      </div>
    </div>
  );
}
