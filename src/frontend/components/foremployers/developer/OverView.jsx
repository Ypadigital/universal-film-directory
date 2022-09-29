import React from "react";
import { FrelancerServices } from "../../Data/UserDatas";

function OverView({ freelancer }) {
  return (
    <div className="pro-post widget-box" id="overview">
      <h3 className="pro-title">Overview</h3>
      <div className="pro-content">
        <p>{freelancer.description}</p>
        <div className="mt-4">
          <h4 className="widget-title">My services include:</h4>
          <ul className="pro-list">
            {FrelancerServices.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OverView;
