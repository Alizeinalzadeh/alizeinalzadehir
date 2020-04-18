import React from "react";
import "./SectionContainer.css";

const SectionContainer = (props) => {
  return (
    <div id={props.id} className="zd-fullpage">
      <div className="zd-container">
        <h2>{props.title}</h2>
        <div className="zd-center-content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
