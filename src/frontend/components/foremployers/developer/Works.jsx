import React from "react";
import { FrelancerPortfolio } from "../../Data/UserDatas";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="pro-post project-widget widget-box" id="project">
      <h3 className="pro-title">Portfolio</h3>
      <div className="pro-content">
        <div className="row">
          {FrelancerPortfolio.map((portfolio, i) => (
            <div key={i} className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <Link to="/portfolio-overview" className="project-widget">
                <div className="pro-image">
                  <img
                    className="img-fluid"
                    alt={portfolio.name}
                    src={portfolio.image}
                  />
                </div>
                <div className="pro-detail">
                  <h3 className="pro-name">{portfolio.name}</h3>
                  <p className="pro-designation">{portfolio.category}</p>
                </div>
              </Link>
            </div>
          ))}

          <div className="col-md-12 text-center">
            <Link to="#" className="btn more-btn">
              View more{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
