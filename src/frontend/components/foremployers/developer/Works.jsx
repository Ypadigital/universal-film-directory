import React from "react";
import { FrelancerPortfolio } from "../../Data/UserDatas";
import { Link } from "react-router-dom";

function Works({ services }) {
  return (
    <div className="pro-post project-widget widget-box" id="project">
      <h3 className="pro-title">Portfolio</h3>
      <div className="pro-content">
        <div className="row">
          {services.map((service, i) => (
            <div key={i} className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <Link
                to={`/portfolio-overview/${service._id}`}
                className="project-widget"
              >
                <div className="pro-image">
                  <img
                    className="img-fluid"
                    alt={service.title}
                    src={service.images[0]}
                  />
                </div>
                <div className="pro-detail">
                  <h3 className="pro-name">{service.title}</h3>
                  <p className="pro-designation">{service.categoryId.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
