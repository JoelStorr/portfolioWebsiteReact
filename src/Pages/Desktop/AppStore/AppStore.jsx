import { useState } from "react";
import "./AppStore.css";
import WhenIChanged from "./AppDetail/WhenIChanged";
import IssueTracker from "./AppDetail/IssueTracker";
import DubDubGrub from "./AppDetail/DubDubGrub";
import GitHubFollowers from "./AppDetail/GitHubFollowers";

export default function AppStore() {
  const Projects = {
    WhenIChanged: "WhenIChanged",
    IssueTracker: "IssueTracker",
    DubDubGrub: "DubDubGrub",
    GitHubFollowers: "GitHubFollowers",
    ARDemos: "ARDemos",
    WidgetKit: "WidgetKit",
  };

  const [shownProject, setShownProject] = useState(Projects.WhenIChanged);

  function changeShownApps(currApp) {
    if (currApp in Projects) {
      setShownProject(currApp);
    }
  }

  function showApp() {
    switch (shownProject) {
      case Projects.WhenIChanged:
        return <WhenIChanged />;
      case Projects.IssueTracker:
        return <IssueTracker />;
      case Projects.DubDubGrub:
        return <DubDubGrub />;
      case Projects.GitHubFollowers:
        return <GitHubFollowers />;
      case Projects.ARDemos:
        return <p>AR Demos</p>;
      case Projects.WidgetKit:
        return <p>Widget Kit</p>;
    }
  }

  return (
    <div className="appStore">
      <div className="appStore-sideBar">
        <h2>Main Projects</h2>
        <ul>
          <li
            onClick={() => changeShownApps(Projects.WhenIChanged)}
            className={
              shownProject == Projects.WhenIChanged ? "activeListElement" : ""
            }
          >
            When I Changed
          </li>
          <li
            onClick={() => changeShownApps(Projects.IssueTracker)}
            className={
              shownProject == Projects.IssueTracker ? "activeListElement" : ""
            }
          >
            Issue Tracker
          </li>
          <li
            onClick={() => changeShownApps(Projects.DubDubGrub)}
            className={
              shownProject == Projects.DubDubGrub ? "activeListElement" : ""
            }
          >
            DubDubGrub - Cloud Kit App
          </li>
          <li
            onClick={() => changeShownApps(Projects.GitHubFollowers)}
            className={
              shownProject == Projects.GitHubFollowers
                ? "activeListElement"
                : ""
            }
          >
            Github Follower Tracker
          </li>
        </ul>

        <h2>Expiriments</h2>
        <ul>
          <li
            onClick={() => changeShownApps(Projects.ARDemos)}
            className={
              shownProject == Projects.ARDemos ? "activeListElement" : ""
            }
          >
            AR Demos
          </li>
          <li
            onClick={() => changeShownApps(Projects.WidgetKit)}
            className={
              shownProject == Projects.WidgetKit ? "activeListElement" : ""
            }
          >
            Widget Kit
          </li>
        </ul>
      </div>
      <div className="appStore-mainView">{showApp()}</div>
    </div>
  );
}
