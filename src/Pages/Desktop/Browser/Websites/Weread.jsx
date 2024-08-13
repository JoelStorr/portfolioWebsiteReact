import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function LinkShare() {
  const images = [
    {
      url: `/images/linkshare/EditorView.png`,
      title: "Editor View",
    },
    {
      url: `/images/linkshare/ProfileView.png`,
      title: "Editor View",
    },
    {
      url: `/images/linkshare/UserCardPreview.png`,
      title: "User Card Preview",
    },
    {
      url: `/images/linkshare/login.png`,
      title: "Login View",
    },
    {
      url: `/images/linkshare/register.png`,
      title: "Register View",
    },
    {
      url: `/images/linkshare/EditorTablet.png`,
      title: "Editor Tablet View",
    },
    {
      url: `/images/linkshare/ProfileTablet.png`,
      title: "Profile Tablet View",
    },
    {
      url: `/images/linkshare/PreviewTablet.png`,
      title: "Profile Tablet View",
    },
  ];

  return (
    <div className="websiteContent">
      <h1>Weread</h1>
      <div className="websiteContentSection">
        {/* <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fit={true} fullHeightImage={true} />
        </div> */}
        <div className="websiteContentCarousel"></div>
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
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
        <h3>Über das Projekt</h3>
        <p>
          <b>Aktuelles Projekt (die Bilder der UI folgen in Kürze)</b> <br />
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
