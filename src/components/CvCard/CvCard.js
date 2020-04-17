import React from "react";
import cvcard from "./cvcard.json";
import "./CvCard.css";
// import Alizeinalzadeh from './img/Alizeinalzadeh.jpg'

const CvCard = () => {
  return (
    <div className="zd-cv-card">
      <img src="img/Alizeinalzadeh.jpg" alt="Ali Zeinalzadeh"/>
      <h1>{cvcard.title}</h1>
      <h3>{cvcard.subtitle}</h3>
      <div className="zd-cv-card-contact">
        {cvcard.details.map((item) => {
          return (
            <div>
              <i className={item.icon}></i>
              <span>{item.content}</span>
            </div>
          );
        })}
      </div>
      <div className="zd-cv-card-social">
        {cvcard.contact.map((item) => {
          return (
            <a href={item.href} className={item.icon} title={item.title}></a>
          );
        })}
      </div>
      <a href="Ali_Zeinalzadeh_09339279298.pdf" download><button>Download Full Resume</button></a> 
    </div>
  );
};

export default CvCard;
