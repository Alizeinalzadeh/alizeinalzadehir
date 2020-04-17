import React from "react";
import EducationList from "./EducationList.json";
import ZdModals from "./../Modals/ZdModals";

const Jobs = () => {
  return (
    <div className="zd-cards">
      {EducationList.education.map((item) => {
        return (
          <div className="zd-cards-items">
            <a href={item.href}>
              <img src={item.img} alt={item.imgAlt} />
            </a>
            <h4>{item.majorTitle}</h4>
            <div>
              <i className="lni lni-graduation"></i>
              <span>{item.location}</span>
            </div>
            <div>
              <i className="lni lni-book"></i>
              <span>{item.degree}</span>
            </div>
            <div>
              <i className="lni lni-calendar"></i>
              <span>
                {item.startDate} - {item.endDate}
              </span>
            </div>
            <ZdModals buttonName="More" modalTitle="Projects">
              <ul>
                {item.responsibilities.map((tasks) => {
                  return <li>{tasks}</li>;
                })}
              </ul>
            </ZdModals>
          </div>
        );
      })}
    </div>
  );
};
export default Jobs;
