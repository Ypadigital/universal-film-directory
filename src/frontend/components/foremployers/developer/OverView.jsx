import React from "react";
import { getRandomKey } from "../../../utils/helpers";

function OverView({ freelancer }) {
  return (
    <div className="pro-post widget-box" id="overview">
      <h3 className="pro-title">Overview</h3>
      <div className="pro-content">
        <div
          dangerouslySetInnerHTML={{
            __html: freelancer.overview,
          }}
        ></div>

        <div className="mt-4">
          <h4 className="widget-title">My services include:</h4>
          <ul className="pro-list">
            {freelancer.services.map((service, i) => (
              <li key={getRandomKey()}>
                {i + 1}. {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OverView;
