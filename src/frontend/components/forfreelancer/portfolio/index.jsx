import React, { useEffect } from "react";
import CreatePortfolioProject from "../../Common/Modals/CreatePortfolioProject";
import SideBar from "../../Common/SideBar";
import Pagination from "../../Common/Pagination";
import { FrelancerPortfolio } from "../../Data/UserDatas";

const FreelancerPortfolio = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <div className="portfolio-item">
          <div className="pro-head p-0 pb-4">
            <h3 className="mb-0">Portfolio</h3>
            <a
              className="btn btn-primary back-btn br-0"
              data-bs-toggle="modal"
              href="#portfolio"
            >
              + Add Portfolio
            </a>
          </div>
          <div className="pro-content pt-4 pb-4">
            <div className="row">
              {FrelancerPortfolio.map((portifolio, index) => (
                <div key={index} className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt={portifolio.name}
                        src={portifolio.image}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content">
                          <a
                            data-bs-toggle="modal"
                            href="#portfolio"
                            className="port-icon"
                          >
                            <i className="fas fa-pen" />
                          </a>
                          <div className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">{portifolio.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-12">
              <Pagination />
            </div>
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
      {/* The Modal */}
      <CreatePortfolioProject />
    </>
  );
};
export default FreelancerPortfolio;
