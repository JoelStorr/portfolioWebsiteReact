import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WhenIChannged.css"


export default function WhenIChanged() {





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
      <hr />
      <h3>Used Tech</h3>
      <div className="appDetailUsedTech">
        <p>Cloud Kit</p>
        <hr />
        <p>Map Kit</p>
        <hr />
        <p>Widget Kit</p>
        <hr />
        <p>Swift UI</p>
      </div>

      <div className="sliderContainer">
        <ImageCarousel  slides={slides}/>
      </div>
      <div>
      {/* TODO: Dispaly Descriptions */}
      </div>
    </>
  );
}
