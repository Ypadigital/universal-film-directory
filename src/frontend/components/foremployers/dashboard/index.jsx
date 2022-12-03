import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import { useDataContext } from "../../../contexts/dataContext";
import {
  contractorDashboardCardInfo,
  getRandomKey,
} from "../../../utils/helpers";
import ProfileViewsChart from "../../Common/ProfileViewsChart";
import StaticAnalyticsChart from "../../Common/StaticAnalyticsChart";

export default function Dashboard(props) {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  let { user } = useDataContext();
  if (!user) return "";
  if (user && !!!user.isLoading) {
    user = user.data;
  }
  // const completedJobsCard =
  const InfoCards = contractorDashboardCardInfo(user);
  console.log(InfoCards);
  return (
    <>
      {/* Page Content */}
      <SideBar>
        <div className="dashboard-sec">
          <div className="row">
            {InfoCards.map((card, index) => (
              <div className="col-6 col-lg-3">
                <InfoCard card={card} key={getRandomKey()} />
              </div>
            ))}
          </div>
          {/* Chart Content */}

          {/* <Charts /> */}
          <div className="row">
            <div className="col-md-8">
              <ProfileViewsChart />
            </div>
            <div className="col-md-4 d-flex">
              <StaticAnalyticsChart />
            </div>
          </div>

          {/* /Chart Content */}
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
}

const InfoCard = ({ card }) => {
  return (
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
  );
};
