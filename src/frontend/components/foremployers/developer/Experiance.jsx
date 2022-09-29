import React from "react";
import { FrelancerExperiance } from "../../Data/UserDatas";

function Experiance() {
  return (
    <div className="pro-post project-widget widget-box" id="experience">
      <h3 className="pro-title">Experience</h3>
      <div className="pro-content">
        <div className="widget-list mb-0">
          <ul className="clearfix">
            {FrelancerExperiance.map((item, index) => (
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

export default Experiance;
