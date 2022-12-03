import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDataContext } from "../../../contexts/dataContext";
import produce from "immer";
import { radialChartOptions } from "../../../utils/helpers";

export default function StaticAnalyticsChart() {
  const chartRef = useRef(null);

  let { user } = useDataContext();
  const userData = user && !!!user.isLoading ? user.data : null;
  const staticAnalyticsData = {
    options: {
      ...radialChartOptions,
    },
    series: [90],
  };

  useEffect(() => {
    if (userData) {
      const newStaticAnalyticsData = produce(staticAnalyticsData, (draft) => {
        draft.series[0] = [userData.jobSuccessRate.toFixed(1) || 100];
      });

      chartRef.current.chart.ctx.updateOptions({ ...newStaticAnalyticsData });
    }
  }, [userData, staticAnalyticsData]);

  return (
    <div className="flex-fill card">
      <div className="pro-head b-0">
        <h5 className="card-title mb-0">Static Analytics</h5>
      </div>
      <div className="pro-body">
        <Chart
          ref={chartRef}
          type="radialBar"
          options={staticAnalyticsData.options}
          series={staticAnalyticsData.series}
        />
        <ul className="static-list">
          <li>
            <span>Job Requests</span>
            <span className="sta-count">{userData?.noOfJobRequests || 0}</span>
          </li>
          <li>
            <span>Completed Jobs</span>
            <span className="sta-count">
              {userData?.noOfCompletedJobs || 0}
            </span>
          </li>
          <li>
            <span>Ongoing Jobs</span>
            <span className="sta-count">{userData?.noOfOngoingJobs || 0}</span>
          </li>
          <li>
            <span>Cancelled Jobs</span>
            <span className="sta-count">
              {userData?.noOfCancelledJobs || 0}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
