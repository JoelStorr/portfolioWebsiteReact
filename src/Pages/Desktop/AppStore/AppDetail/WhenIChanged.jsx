import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css"


export default function WhenIChanged() {





  const slides = [
    {
      url: "images/WhenIChanged/WActiveHabit.jpg",
      title: "SunFlower",
    },
    {
      url: "images/WhenIChanged/WSpecialDayEditor.jpg",
      title: "Mountanse",
    },
    {
      url: "images/WhenIChanged/WPassivHabit.jpg",
      title: "Lamps",
    },
    {
      url: "images/WhenIChanged/WDetail.jpg",
      title: "Chip",
    }
  ];




    
  return (
    <>
      <div className="appDetailHeader">
        <div className="appDetailAppIcon">IC</div>
        <div>
          <h1>When I Changed</h1>
          <h3>Bleib am Ball, um deine Ziele zu erreichen</h3>
          {/* TODO: Make sure linke goes to repo */}
          <a
            className="downloadBtn"
            href="https://github.com/JoelStorr/When-I-Changed"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="appDetailDevider"></div>

      <div className="appDetailUsedTech">
        <h3>Benutzte Technologien</h3>
        <div className="appDetailUsedTechList">
          <p>Swift UI</p>
          <hr />
          <p>Cloud Kit</p>
          <hr />
          <p>Widget Kit</p>
          <hr />
          <p>Notofications</p>
          <hr />
          <p>Image Library</p>
        </div>
      </div>

      <div className="sliderContainer">
        <ImageCarousel slides={slides} file={false} fullHeightImage={false} />
      </div>
      <div className="appDetailDevider"></div>
      <div className="appDetailProjectDetail">
        <h3>Über das Projekt</h3>
        <p>
          (Work in Progress)
          <br />
          <br />
          <strong>When I Changed</strong> ist meine erste eigene vollwertige IOS
          App. Das Ziel dieser App ist es, verschiedene Aktivitäten zu tracken.
          Hierbei sollen in der App eine Reihe wichtiger Habits entweder aktiv
          oder passiv verfolgt werden. Die Idee hierbei ist, dass negative
          Angewohnheiten automatisch von der App aufgenommen werden und nur dann
          eine Nutzereingabe erfordern, wenn diese gebrochen werden. Möchte man
          z.B. mit dem Rauchen aufhören, zählt die App automatisch die Tage, an
          denen man nicht geraucht hat. Sollte man dann doch an einem Tag
          rückfällig werden, kann man den Counter in der App wieder zurücksetzen
          und die App fängt von neuem an, die Tage zu zählen. Bei aktiven Habits
          ist eine regelmäßige Nutzereingabe erforderlich. So soll der tägliche
          Check-in nach dem Sport als eine Belohnung für Angewohnheiten
          positiver Natur dienen. Als weiteres Feature gibt es einen Countdown
          für besondere Tage, wie z.B. den Start in den nächsten Urlaub. Diese
          Tage können auch bequem via Home Screen Widget angezeigt werden. Der
          Tab kommt mit einem eingebauten Editor, der es ermöglicht das Widget
          für den Tag zu bearbeiten und mit eigener Schrift und Hintergrundbild
          zu versehen. Auch hier werden alle Daten via der iCloud auf den
          verschiedenen Geräten des Nutzers geteilt. <br /> <br />
          Beim Programmieren dieser App habe ich mich weiter mit Cloud Kit, der
          Bildergalerie, Widget Kit und Benachrichtigungen vertraut gemacht.
        </p>
      </div>
    </>
  );
}
