import React from "react";
import "./SkillRender.css";
import Tools from "./Tools.json";
import Languages from "./Languages.json";
import Industry from "./Industry.json";

const SkillRender = () => {
  return (
    <div class="znzd-skills">
      <div class="zd-skills-list">
        <h3>Tools & Technology</h3>
        <div>
          {Tools.skills.map((item) => {
            return <span>{item.title}</span>;
          })}
        </div>
        <h3>Industry Knowledge</h3>
        <div>
          {Industry.skills.map((item) => {
            return <span>{item.title}</span>;
          })}
        </div>
        <h3>Languages</h3>
        <div>
          {Languages.skills.map((item) => {
            return <span>{item.title}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillRender;
