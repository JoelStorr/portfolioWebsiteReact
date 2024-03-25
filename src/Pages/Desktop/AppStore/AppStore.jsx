import { useState } from "react";
import "./AppStore.css";
import WhenIChanged from "./AppDetail/WhenIChanged";
import IssueTracker from "./AppDetail/IssueTracker";
import DubDubGrub from "./AppDetail/DubDubGrub";
import GitHubFollowers from "./AppDetail/GitHubFollowers";

export default function AppStore({width, setProgramm, Programm}) {
  const Projects = {
    WhenIChanged: "WhenIChanged",
    IssueTracker: "IssueTracker",
    DubDubGrub: "DubDubGrub",
    GitHubFollowers: "GitHubFollowers",
    ARDemos: "ARDemos",
    WidgetKit: "WidgetKit",
  };

  const [shownProject, setShownProject] = useState(Projects.WhenIChanged);
  const [sidebarState, setSidebarState] = useState(true)

  function changeShownApps(currApp) {
    if (currApp in Projects) {
      setShownProject(currApp);
      setSidebarState(false);
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
    <>
      {width <= 825 ? (
        <div className="appStore">
          {sidebarState ? (
            <div className="appStore-sideViewMobile-Holder">
              <div className="appStore-backButton">
                <button onClick={() => setProgramm(Programm.None)}>
                  <img src="/images/icons/chevron-left-solid.svg" />
                  Home
                </button>
              </div>
              <AppStoreSideBar
                shownProject={shownProject}
                changeShownApps={changeShownApps}
                Projects={Projects}
              />
            </div>
          ) : (
            <div className="appStore-mainViewMobile-Holder">
              <div className="appStore-backButton">
                <button onClick={() => setSidebarState(true)}>
                  <img src="/images/icons/chevron-left-solid.svg" />
                  Back
                </button>
              </div>
              <div className="appStore-mainView">{showApp()}</div>
            </div>
          )}
        </div>
      ) : (
        <div className="appStore">
          <AppStoreSideBar
            shownProject={shownProject}
            changeShownApps={changeShownApps}
            Projects={Projects}
          />
          <div className="appStore-mainView">{showApp()}</div>
        </div>
      )}
    </>
  );
}


function AppStoreSideBar({shownProject, changeShownApps, Projects}){

  return (
    <div className="appStore-sideBar">
      <h2>Projeckte</h2>
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
            shownProject == Projects.GitHubFollowers ? "activeListElement" : ""
          }
        >
          Github Follower Tracker
        </li>
      </ul>
    </div>
  );
}