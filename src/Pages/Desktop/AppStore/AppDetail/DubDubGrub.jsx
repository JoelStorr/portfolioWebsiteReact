
import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css"


export default function DubDubGrub() {





  const slides = [
    {
      url: `images/DubDubGrub/DStart.jpg`,
      title: "SunFlower",
    },
    {
      url: `images/DubDubGrub/DPlaces.jpg`,
      title: "Mountanse",
    },
    {
      url: `images/DubDubGrub/DProfile.jpg`,
      title: "Lamps",
    },
  ];




    
  return (
    <>
      <div className="appDetailHeader">
        <div className="appDetailAppIcon">DG</div>
        <div>
          <h1>Dub Dub Grub</h1>
          <h3>
            IPhone App, um sich mit Eventteilnehmern zu verbinden (Sean Allen
            Tutorial)
          </h3>
          {/* TODO: Make sure linke goes to repo */}
          <a
            className="downloadBtn"
            href="https://github.com/JoelStorr/DubDubGrub-CloudKit-App"
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
          <p>Map Kit</p>
        </div>
      </div>

      <div className="sliderContainer">
        <ImageCarousel slides={slides} file={false} fullHeightImage={false} />
      </div>
      <div className="appDetailDevider"></div>
      <div className="appDetailProjectDetail">
        {/* TODO: Dispaly Descriptions */}
        <h3>Über das Projeckt</h3>
        <p>
          <strong>Dub Dub Grub</strong> ist eine Cloudkit basierte App aus dem
          App Kurs von Sean Allen. Die App vereint Techniken aus Map Kit und
          Cloud Kit, um Eventteilnehmer, die sich eingecheckt haben, in
          umlegenden Lokalitäten zu finden. Dabei setzt die App auf eine Cloud
          Kit Synchronisation, durch die die Daten aller Nutzer synchron
          gehalten und geteilt werden.
          <br />
          <br />
          Mit diesem Projekt habe ich mich in die Integration von Map Kit
          eingearbeitet und erste Erfahrungen mit dem Einbinden von iCloud Daten
          gesammelt. Hierbei setzt das Projekt auf den öffentlichen iCloud
          Bereich, der es Entwicklern möglich macht mit allen Nutzern Daten zu
          teilen.
        </p>
      </div>
    </>
  );
}
