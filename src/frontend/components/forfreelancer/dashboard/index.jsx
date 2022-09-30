import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import DasboardSideBar from "../../Common/DasboardSideBar";
import Charts from "./Charts";
import { FreelancerData } from "../../Data/UserDatas";
import { FreelancerSidebarData } from "../../Data/DashboardData";
import SideBar from "../../Common/SideBar";

const FreelancerDashboard = (props) => {
  const user = FreelancerData[3];
  const Cards = [
    {
      title: "Completed Jobs",
      value: user.completedProjects,
      link: "freelancer-completed-projects",
    },
    {
      title: "Ongoing Jobs",
      value: user.onGoingProjects,
      link: "freelancer-ongoing-projects",
    },
    {
      title: "Reviews",
      value: 30,
      link: "freelancer-review",
    },
  ];
  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <div className="dashboard-sec">
          <div className="row">
            {Cards.map((card, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="dash-widget">
                  <div className="dash-info">
                    <div className="dash-widget-info">{card.title}</div>
                    <div className="dash-widget-count">{card.value}</div>
                  </div>
                  <div className="dash-widget-more">
                    <Link to={`/${card.link}`} className="d-flex">
                      View Details <i className="fas fa-arrow-right ms-auto" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Chart Content */}
          <Charts />
          {/* /Chart Content */}
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerDashboard;
