import React, { useState } from "react";
import "./grid.min.css";
import "./reset.min.css";
import "./darktheme.css";
import Header from "./sections/Header";
import CvCard from "./components/CvCard/CvCard";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Jobs from "./sections/Jobs";
import Educations from "./sections/Educations";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("zd-light-theme");
  const changeTheme = () => {
    setTheme(() => {
      if (document.getElementById("zd-theme").className === "zd-light-theme") {
        document.getElementById("zd-theme").className = "zd-dark-theme";
      } else document.getElementById("zd-theme").className = "zd-light-theme";
    });
  };

  return (
    <Router>
      <div className="App">
        <div id="zd-theme" className={theme}>
          <span className="zd-darkmode-button" onClick={changeTheme}>
            <i className="lni lni-night"></i>
          </span>
          <Header />
          <div className="row">
            <div className="col-12 col-lg-4 zd-fullpage-card d-none d-lg-block">
              <CvCard />
            </div>
            <div className="col-12 col-lg-8">
              <Switch>
              <Route exact path="/" component={About}>
                {/* <About /> */}
              </Route>
              <Route path="/about" component={About}>
                {/* <About /> */}
              </Route>
              <Route path="/skills" component={Skills}>
                {/* <Skills /> */}
              </Route>
              <Route path="/jobs" component={Jobs}>
                {/* <Jobs /> */}
              </Route>
              <Route path="/education" component={Educations}>
                {/* <Educations /> */}
              </Route>
              </Switch>
              {/* <About />
            <Skills />
            <Jobs />
            <Educations /> */}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
