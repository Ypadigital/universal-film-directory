import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import VipSideBar from "../../../Common/VipSideBar";

const VIPDashboard = () => {
  var chartprofileoptions = {
    series: [
      {
        name: "profile view",
        data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350],
      },
    ],
    chart: {
      height: 360,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF5B37"],
    stroke: {
      curve: "straight",
      width: [1],
    },
    markers: {
      size: 4,
      colors: ["#FF5B37"],
      strokeColors: "#FF5B37",
      strokeWidth: 1,
      hover: {
        size: 7,
      },
    },
    grid: {
      position: "front",
      borderColor: "#ddd",
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  };
  useEffect(() => {
    let chartprofileoptionsColumn = document.getElementById("chartprofile");
    let chartprofileoptionsChart = new ApexCharts(
      chartprofileoptionsColumn,
      chartprofileoptions
    );
    chartprofileoptionsChart.render();

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <VipSideBar>
        <div className="dashboard-sec">
          <div className="card flex-fill">
            <div className="pro-head">
              <h5 className="card-title mb-0">Your Profile View</h5>
              <div className="month-detail">
                <select className="form-control">
                  <option value={0}>Last 6 months</option>
                  <option value={1}>Last 2 months</option>
                </select>
              </div>
            </div>
            <div className="pro-body">
              <div id="chartprofile" />
            </div>
          </div>
        </div>
      </VipSideBar>
      {/* /Page Content */}
    </>
  );
};
export default VIPDashboard;
