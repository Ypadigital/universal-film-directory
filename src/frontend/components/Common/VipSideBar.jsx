import React from "react";
import StickyBox from "react-sticky-box";
import { VIPSidebarData } from "../Data/DashboardData";
import DasboardSideBar from "./DasboardSideBar";
import { VipData } from "../Data/VipData";

function VipSideBar({ children }) {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <DasboardSideBar data={VIPSidebarData} user={VipData[3]} />
            </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default VipSideBar;
