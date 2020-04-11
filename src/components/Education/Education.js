import React from "react";
import EducationList from "./EducationList.json";

const Jobs = () => {
  return (
    <div class="zd-cards">
      {EducationList.education.map((item) => {
        return (
          <div class="zd-cards-items">
            <a href={item.href}>
              <img src={item.img} alt={item.imgAlt} />
            </a>
            <h4>{item.majorTitle}</h4>
            <div>
              <i class="lni lni-graduation"></i>
              <span>{item.location}</span>
            </div>
            <div>
              <i class="lni lni-book"></i>
              <span>{item.degree}</span>
            </div>
            <div>
              <i class="lni lni-calendar"></i>
              <span>
                {item.startDate} - {item.endDate}
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
