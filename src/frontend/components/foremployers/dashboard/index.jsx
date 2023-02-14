import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import {
  contractorDashboardCardInfo,
  getRandomKey,
} from "../../../utils/helpers";
import StaticAnalyticsChart from "../../Common/StaticAnalyticsChart";
import { useUserData } from "../../../hooks/useUserData";

export default function Dashboard(props) {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const { data: user } = useUserData();
  // if (!user) return "";

  // const completedJobsCard =
  const InfoCards = contractorDashboardCardInfo(user || {});
  return (
    <>
      <SideBar>
        <div className="dashboard-sec">
          <div className="row">
            {InfoCards.map((card, index) => (
              <div className="col-6 col-lg-3" key={getRandomKey()}>
                <InfoCard card={card} key={getRandomKey()} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-4 d-flex">
              <StaticAnalyticsChart />
            </div>
          </div>
        </div>
      </SideBar>
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
