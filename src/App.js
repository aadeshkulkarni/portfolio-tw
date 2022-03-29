import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Icon from "./components/commons/icons";
import {
  academic,
  adjustment,
  annotation,
  archive,
  darkMode,
  darkModeEnabled,
  downArrow,
  lightMode,
  lightModeEnabled,
  upArrow,
} from "./components/commons/icons/index";
import Home from "./components/home";
import KnowMore from "./components/know-more";
import Projects from "./components/projects";
import Subscribe from "./components/subscribe";

function App() {
  const [menuLevel, setMenuLevel] = useState(0);
  const [mode, setMode] = useState("dark");
  const changeMode = (value) => {
    localStorage.setItem("theme", value);
    setMode(value);
  };
  useEffect(() => {
    const bodyTag = document.getElementsByTagName("body")[0];
    bodyTag.classList.remove("dark", "light");
    bodyTag.classList.add(mode);
  }, [mode]);
  return (
    <Router>
      <div className="flex justify-center h-full max-w-md min-h-full mx-auto overflow-y-auto shadow-lg lg:max-w-full filter backdrop-brightness-25 bg-gradient-to-t dark:from-blue-700 dark:via-teal-500 dark:to-cyan-500 bg-opacity-60">
        <div className="flex flex-col w-full lg:w-2/5">
          <div
            className={`flex-initial max-w-full min-h-100 bg-gray-900 bg-opacity-10 relative cursor-pointer p-4 h-300`}
          >
            {menuLevel === 0 && (
              <div className="flex items-center justify-between max-w-full pb-1 pl-2 text-white">
                <span
                  onClick={() => {
                    changeMode("light");
                  }}
                  className={`w-8 h-8 text-gray-100 opacity-50 rounded-lg ${mode === "light" && "animate-mode-pulse"
                    }`}
                >
                  {mode === "light" ? lightModeEnabled() : lightMode()}
                </span>
                <span
                  onClick={() => {
                    changeMode("dark");
                  }}
                  className={`w-8 h-8 text-white opacity-50 rounded-lg ${mode === "dark" && "animate-mode-pulse"
                    }`}
                >
                  {mode === "dark" ? darkModeEnabled() : darkMode()}
                </span>
              </div>
            )}
            {menuLevel === 1 && (
              <div
                className={` grid grid-cols-4 gap-2 bg-opacity-30 ${menuLevel === 1 ? "animate-drawer" : ""
                  }`}
              >
                <NavLink exact={true} activeClassName="is-active" to="/">
                  <Icon label={archive} />
                </NavLink>
                <NavLink activeClassName="is-active" to="/know-more">
                  <Icon label={annotation} />
                </NavLink>
                <NavLink activeClassName="is-active" to="/projects">
                  <Icon label={adjustment} />
                </NavLink>
                <NavLink activeClassName="is-active" to="/education">
                  <Icon label={academic} />
                </NavLink>
                {/* <Link to="/subscribe">
                <Icon label={bell} />
              </Link> */}
              </div>
            )}
          </div>
          <div className="absolute flex items-center justify-center flex-initial w-full max-w-full pointer-events-none lg:w-2/5 top-4">
            <div
              onClick={() => {
                setMenuLevel((menuLevel + 1) % 2);
              }}
              className={`w-8 h-8 cursor-pointer pointer-events-auto text-gray-100 opacity-20 rounded-lg  ${menuLevel === 1
                  ? "transform translate-y-20 z-20"
                  : "transform translate-y-0 animate-title-pulse"
                }`}
            >
              {menuLevel === 0 ? downArrow() : upArrow()}
            </div>
          </div>
          <Switch>
            <Route path="/know-more">
              <KnowMore />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/education">
              <Subscribe />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
