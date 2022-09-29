import React from "react";
import { FrelancerEducation } from "../../Data/UserDatas";

function Educatin() {
  return (
    <div className="pro-post project-widget widget-box" id="education">
      <h3 className="pro-title">Educational Details</h3>
      <div className="pro-content">
        <div className="widget-list mb-0">
          <ul className="clearfix">
            {FrelancerEducation.map((item, index) => (
              <li key={index}>
                <h4>{item.name}</h4>
                <h5>
                  {item.company} {item.date}
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

export default Educatin;
