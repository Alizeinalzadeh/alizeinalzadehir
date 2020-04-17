import React from "react";
import "./Jobs.css";
import JobsList from "./Jobs.json";
import ZdModals from "./../Modals/ZdModals";

const Jobs = () => {
  return (
    <div className="zd-cards">
      {JobsList.jobs.map((item) => {
        return (
          <div className="zd-cards-items">
            <a href={item.href}>
              <img src={item.img} alt={item.imgAlt} />
            </a>
            <h4>{item.jobTitle}</h4>
            <div>
              <i className="lni lni-pointer"></i>
              <span>{item.location}</span>
            </div>
            <div>
              <i className="lni lni-calendar"></i>
              <span>
                {item.startDate} - {item.endDate}{" "}
              </span>
            </div>
            {/* <button>More</button> */}
            <ZdModals buttonName="More" modalTitle="Responsibilities">
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
