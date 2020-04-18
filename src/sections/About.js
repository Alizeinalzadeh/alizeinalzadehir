import React from "react";
import SectionContainer from "./../components/SectionContainer/SectionContainer";
import CvCard from "./../components/CvCard/CvCard";

const About = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <SectionContainer id="about" title="About" style="margin-top: 0;">
          <p className="zd-about-content">
            Hi I am Ali Zeinalzadeh, a Front-End Developer. Experienced with 2+
            years of working in the information technology and services
            industry. Proficient in JavaScript (ES6), HTML, CSS; plus, familiar
            with modern libraries and frameworks like React, Bootstrap and etc.
            I am also familiar with PHP and Magento E-Commerce platform.
            Currently I am trying to have deeper understanding about React.js. I
            like to write clean and easily readable code. As a web developer, I
            always work in teams, and I know how important it is to keep writing
            good code. Also, I am an active learner with great curiosity in new
            technologies, and all other cool things. I try my best to take more
            learning courses and become a better developer so that I can bring
            more values to my team and my company.
          </p>
        </SectionContainer>
      </div>
      <div className="d-block d-lg-none">
        <CvCard />
      </div>
    </div>
  );
};

export default About;
