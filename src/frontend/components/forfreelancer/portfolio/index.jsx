import React, { useEffect, useState } from "react";
import CreatePortfolioProject from "../../Common/Modals/CreatePortfolioProject";
import SideBar from "../../Common/SideBar";
import Pagination from "../../Common/Pagination";
import { FrelancerPortfolio } from "../../Data/UserDatas";
import EditPortfolioProject from "../../Common/Modals/EditPortfolioProject.jsx";
import { useUserData } from "../../../hooks/useUserData";

const FreelancerPortfolio = (props) => {
  const [isEditModalActive, setisEditModalActive] = useState(false);
  const { data: currentUser } = useUserData();

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const [selectedService, setSelectedService] = useState(null);

  if (!currentUser) return "";

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
              onClick={() => setSelectedService(null)}
            >
              + Add Portfolio
            </a>
          </div>
          <div className="pro-content pt-4 pb-4">
            <div className="row">
              {currentUser?.services.map((portfolio, index) => (
                <div key={portfolio._id} className="col-sm-6 col-lg-4">
                  <div className="project-widget">
                    <div className="portfolio-img">
                      <img
                        className="img-fluid"
                        alt={portfolio.title}
                        src={portfolio.images[0]}
                      />
                      <div className="portfolio-live">
                        <div className="portfolio-content gap-10 d-flex">
                          <button
                            className="port-icon"
                            onClick={() => {
                              setSelectedService(portfolio);
                              setisEditModalActive(true);
                            }}
                          >
                            <i className="fas fa-pen" />
                          </button>
                          <button className="port-icon">
                            <i className="fas fa-trash-alt" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-detail">
                      <h3 className="pro-name">{portfolio.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="col-md-12">
              <Pagination />
            </div> */}
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
      {/* The Modal */}
      {!!selectedService && (
        <EditPortfolioProject
          isActive={isEditModalActive}
          setIsActive={setisEditModalActive}
          selectedService={selectedService}
          onSetSelectedService={setSelectedService}
        />
      )}

      <CreatePortfolioProject />
    </>
  );
};
export default FreelancerPortfolio;
