
import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css"


export default function DubDubGrub() {





  const slides = [
    {
      url: "https://images.unsplash.com/photo-1706007171907-49841a64792a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "SunFlower",
    },
    {
      url: "https://images.unsplash.com/photo-1706088604350-f3c46951ee02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mountanse",
    },
    {
      url: "https://images.unsplash.com/photo-1706273427992-8a1b37142cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lamps",
    },
    {
      url: "https://images.unsplash.com/photo-1706263085333-653485333e47?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chip",
    },
    {
      url: "https://images.unsplash.com/photo-1706211306770-89f0a903eda7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Space",
    },
  ];




    
  return (
    <>
      <div className="appDetailHeader">
        <div className="appDetailAppIcon"></div>
        <div>
          <h1>Dub Dub Grub</h1>
          <h3>
            iPhone app to connect with people during events(Sean Allen Tutorial)
          </h3>
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
          <hr/>
          <p>Cloud Kit</p>
          <hr />
          <p>Map Kit</p>
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
          Dub Dub Grub ist eine Cloudkit basierte App aus dem App Kurs von Sean
          Allen. Die App vereint technicken aus Map Kit und Cloud Kit, um eine
          Event Freunde Finder App zu sein. Während großer Events muss jeder
          zwischendurch was Essen und so erlaubt es einem die App, während eines
          Events seine Freunde in umlegenden Restaurants zu finden und selber in
          nahe gelegene Locations ein zu checken. Dabei setzt die App auf eine
          Cloudkit Synchronisation, um die Daten für alle Nutzer synchron zu
          halten und zu teilen.
          <br/><br/>
           Mit diesem Projekt habe ich mich in die
          Integration von Map Kit eingearbeitet und habe erste Erfahrungen mit
          dem Einbinden von iCloud Daten gesammelt. Hierbei setzt das Projekt
          auf den öffentlichen iCloud Bereich, der es Entwicklern möglich macht
          mit allen Nutzern Daten zu teilen.
        </p>
      </div>
    </>
  );
}
