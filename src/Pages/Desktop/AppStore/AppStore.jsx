
import { useState } from 'react';
import './AppStore.css'

export default function AppStore() {



  const Projects = {
    WhenIChanged: "WhenIChanged",
    IssueTracker: "IssueTracker",
    DubDubGrub: "DubDubGrub",
    GitHubFollowers: "GitHubFollowers",
    ARDemos: "ARDemos",
    WidgetKit: "WidgetKit"
  }

  const [shownProject, setShownProject] = useState(Projects.WhenIChanged)

  function changeShownApps(currApp){
    if(currApp in Projects){
      setShownProject(currApp)
    }
  }


  function showApp(){
    switch (shownProject){
      case Projects.WhenIChanged:
        return <p>When I Changed Project</p>
      case Projects.IssueTracker:
        return <p>Issue Tracker</p>
      case Projects.DubDubGrub:
        return <p>Dub Dub Grub</p>
      case Projects.GitHubFollowers:
        return <p>Git Hub Followers</p>
      case Projects.ARDemos:
        return <p>AR Demos</p>
      case Projects.WidgetKit:
        return <p>Widget Kit</p>
    }
  }


  return (
    <div className="appStore">
      <div className="appStore-sideBar">
        
        <h3>Main Projects</h3>
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

        <h3>Expiriments</h3>
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
      <div className="appStore-mainView">
        
        {showApp()}
      </div>
    </div>
  );
}

