import React from "react";
import { formatDate2 } from "../../../utils/helpers";

function Experiance({ experiences }) {
  return (
    <div className="pro-post project-widget widget-box" id="experience">
      <h3 className="pro-title">Experience</h3>
      <div className="pro-content">
        <div className="widget-list mb-0">
          <ul className="clearfix">
            {experiences.map((item, index) => (
              <li key={index}>
                <h4>{item.title}</h4>
                <h5 className="d-flex justify-content-start align-items-center gap-10">
                  <span>{item.company} </span>
                  <span>
                    {formatDate2(item.startDate)} - {formatDate2(item.endDate)}
                  </span>
                </h5>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
