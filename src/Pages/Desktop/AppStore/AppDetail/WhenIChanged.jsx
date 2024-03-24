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
          <h3>Stay on Track to reach your golas</h3>
          {/* TODO: Make sure linke goes to repo */}
          <a
            className="downloadBtn"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="appDetailDevider"></div>

      <div className="appDetailUsedTech">
        <h3>Used Tech</h3>
        <div className="appDetailUsedTechList">
          <p>Swift UI</p>
          <hr />
          <p>Cloud Kit</p>
          <hr />
          <p>Widget Kit</p>
          
        </div>
      </div>

      <div className="sliderContainer">
        <ImageCarousel slides={slides} file={false} fullHeightImage={false} />
      </div>
      <div className="appDetailDevider"></div>
      <div className="appDetailProjectDetail">
        {/* TODO: Dispaly Descriptions */}
        <h3>About the Project</h3>
        <p>
          Work in Progress When I Changed ist meine erste eigene vollwertige IOS
          App. Das Ziel dieser App ist verschiedene Aktivitäten zu Tracken.
          Hierbei sollen in der App eine Reihe wichtiger Habits entweder Aktiv
          oder Passiv verfolget werden. Die Idee hierbei ist das negative
          Angewohnheiten automatisch von der App aufgenommen werden und nur dann
          eine Nutzer Eingabe erfordern, wenn diese gebrochen wird. <br/> <br/> Wenn sie
          z.B. mit dem Rauchen aufhören wollen zählt die App automatisch die
          Tage an denen sie nicht geraucht haben, sollten sie dann doch an einem
          Tag rückfällig werden, können sie den Counter in der App einfach wider
          zurück setzen und die App fängt von neuem an zu zählen. Bei aktiven
          Habits ist eine regelmäßige Nutzereingabe erforderlich. So soll der
          tägliche Check in nach dem Sport eher, als eine Belohnung diene für
          Angewohnheiten die positiver Natur sind. Als letztes feature gibt es
          besondere Tage. Hiebei zählt die App wie viele Tage es noch bis zum
          Geburtstag oder bis zum nächsten Urlaub sind. Dies Tage können auf
          bequem via Home Screen Widget angezeigt werden. Der besondere Tag
          kommt mit einem eingebauten Editor, welcher es ermöglicht das Widget
          für den Tag zu bearbeiten und mit eigener Schrift und Hintergrundbild
          zu versehen. Auch hier werden alle Daten via der iCloud auf den
          verscheiden Geräten des Nutzers geteilt. <br/> <br/>Beim Programmieren der App
          habe ich mich weiter mit Cloud Kit, der Bilder Galerie, Widget Kit und
          Benachrichtigungen vertraut gemacht.
        </p>
      </div>
    </>
  );
}
