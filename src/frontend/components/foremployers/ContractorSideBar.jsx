import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { EmployerSidebarData } from "../Data/DashboardData";
import { EmployData } from "../Data/EmployData";
// import DasboardSideBar from "./DasboardSideBar";

function ContractorSideBar({ children }) {
  const user = EmployData[2];
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
            <StickyBox offsetTop={144} offsetBottom={20}>
              <div className="settings-widget">
                <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
                  <img
                    alt={user.name}
                    src={user?.image}
                    className="avatar-lg rounded-circle"
                  />
                  <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
                    <p className="mb-2">Welcome,</p>
                    <h3 className="mb-0">{user.name}</h3>
                    <p className="mb-0">{user?.email}</p>
                  </div>
                </div>
                <div className="settings-menu">
                  <ul>
                    {EmployerSidebarData.map((item, index) => (
                      <li key={index} className="nav-item">
                        <MenuItem
                          url={item.link}
                          icon={item.icon}
                          name={item.name}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ url, icon, name }) => {
  const pathname = window.location.pathname;

  return (
    <Link to={url} className={`nav-link ${pathname === url ? "active" : ""}`}>
      <i className="material-icons">{icon}</i>
      {name}
    </Link>
  );
};

export default ContractorSideBar;
