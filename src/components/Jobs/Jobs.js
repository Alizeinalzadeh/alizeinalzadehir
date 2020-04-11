import React from "react";
import "./Jobs.css";
import JobsList from "./Jobs.json";

const Jobs = () => {
  return (
    <div class="zd-cards">
      {JobsList.jobs.map((item) => {
        return (
          <div class="zd-cards-items">
            <a href={item.href}>
              <img src={item.img} alt={item.imgAlt} />
            </a>
            <h4>{item.jobTitle}</h4>
            <div>
              <i class="lni lni-pointer"></i>
              <span>{item.location}</span>
            </div>
            <div>
              <i class="lni lni-calendar"></i>
              <span>
                {item.startDate} - {item.endDate}{" "}
              </span>
            </div>
            <a href={item.moreLink}>
              <button>More</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default Jobs;
