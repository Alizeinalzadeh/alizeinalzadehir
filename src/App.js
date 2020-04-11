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
    <div className="App">
      <div id="zd-theme" className={theme}>
        <span className="zd-darkmode-button" onClick={changeTheme}>
          <i class="lni lni-night"></i>
        </span>
        <Header />
        <div className="row">
          <div className="col-12 col-lg-4 zd-fullpage-card">
            <CvCard />
          </div>
          <div className="col-12 col-lg-8">
            <About />
            <Skills />
            <Jobs />
            <Educations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
