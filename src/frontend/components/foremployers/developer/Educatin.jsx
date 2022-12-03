import React from "react";
import { formatDate2 } from "../../../utils/helpers";

export default function Educatin({ education }) {
  return (
    <div className="pro-post project-widget widget-box" id="experience">
      <h3 className="pro-title">Experience</h3>
      <div className="pro-content">
        <div className="widget-list mb-0">
          <ul className="clearfix">
            {education.map((item, index) => (
              <li key={index}>
                <h4>{item.title}</h4>
                <h5 className="d-flex justify-content-start align-items-center gap-10">
                  <span>{item.school} </span>
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
