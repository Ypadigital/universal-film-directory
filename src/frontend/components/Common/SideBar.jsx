import React from "react";
import StickyBox from "react-sticky-box";
import {
  EmployerSidebarData,
  FreelancerSidebarData,
} from "../Data/DashboardData";
import { EmployData } from "../Data/EmployData";
import { FreelancerData } from "../Data/UserDatas";
import DasboardSideBar from "./DasboardSideBar";

function SideBar({ children, freelancer }) {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <DasboardSideBar
                data={freelancer ? FreelancerSidebarData : EmployerSidebarData}
                user={freelancer ? FreelancerData[3] : EmployData[2]}
              />
            </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
