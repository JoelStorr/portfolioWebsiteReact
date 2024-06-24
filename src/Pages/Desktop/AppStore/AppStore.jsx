import { Link, Outlet, useLocation } from "react-router-dom";
import "./AppStore.css";

export default function AppStore({ width }) {
  const location = useLocation();

  return (
    <>
      {width <= 825 ? (
        <div className="appStore">
          {location.pathname === "/appstore/sidebar" ? (
            <div className="appStore-sideViewMobile-Holder">
              <div className="appStore-backButton">
                <Link to="/" className="homeLink">
                  <button>
                    <img src="/images/icons/chevron-left-solid.svg" />
                    Home
                  </button>
                </Link>
              </div>
              <AppStoreSideBar />
            </div>
          ) : (
            <div className="appStore-mainViewMobile-Holder">
              <div className="appStore-backButton">
                <Link to="/appstore/sidebar" replace className="homeLink">
                  <button>
                    <img src="/images/icons/chevron-left-solid.svg" />
                    Menu
                  </button>
                </Link>
              </div>
              <div className="appStore-mainView">
                <Outlet />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="appStore">
          <AppStoreSideBar />
          <div className="appStore-mainView">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

function AppStoreSideBar() {
  return (
    <div className="appStore-sideBar">
      <h2>Projekte</h2>
      <ul>
        <li
          className={
            location.pathname == "/appstore" ? "activeListElement" : ""
          }
        >
          <Link to="/appstore" replace>
            When I Changed
          </Link>
        </li>
        <li
          className={
            location.pathname == "/appstore/issue" ? "activeListElement" : ""
          }
        >
          <Link to="/appstore/issue" replace>
            Issue Tracker
          </Link>
        </li>
        <li
          className={
            location.pathname == "/appstore/dubdub" ? "activeListElement" : ""
          }
        >
          <Link to="/appstore/dubdub" replace>
            DubDubGrub - Cloud Kit App
          </Link>
        </li>
        <li
          className={
            location.pathname == "/appstore/gh" ? "activeListElement" : ""
          }
        >
          <Link to="/appstore/gh" replace>
            Github Follower Tracker
          </Link>
        </li>
      </ul>
    </div>
  );
}
