import "./WhenIChannged.css"


export default function WhenIChanged() {
    
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

      <div>{/* TODO: Display Images */}</div>
      <div>{/* TODO: Dispaly Descriptions */}</div>
    </>
  );
}
