import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

function ChartsEmployer() {
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

  var chartradialOptions = {
    series: [85, 75, 60, 40],
    chart: {
      toolbar: {
        show: false,
      },
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "50%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#7B46BE", "#FA6CA4", "#FACD3A", "#24C0DC"],
    labels: ["Applied Jobs", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: false,
      floating: true,
      fontSize: "16px",
      position: "bottom",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };
  useEffect(() => {
    let chartprofileoptionsColumn = document.getElementById("chartprofile");
    let chartprofileoptionsChart = new ApexCharts(
      chartprofileoptionsColumn,
      chartprofileoptions
    );
    chartprofileoptionsChart.render();

    let invoiceColumn = document.getElementById("chartradial");
    let invoiceChart = new ApexCharts(invoiceColumn, chartradialOptions);
    invoiceChart.render();

  });
  return (
    <div className="row">
      <div className="col-xl-8 d-flex">
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
      <div className="col-xl-4 d-flex">
        <div className="flex-fill card">
          <div className="pro-head b-0">
            <h5 className="card-title mb-0">Static Analytics</h5>
          </div>
          <div className="pro-body">
            <div id="chartradial" />
            <ul className="static-list">
              <li>
                <span>
                  <i className="fas fa-circle text-violet me-1" /> Complited
                  Jobs
                </span>{" "}
                <span className="sta-count">30</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-circle text-pink me-1" /> Ongoing Jobs
                </span>{" "}
                <span className="sta-count">30</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-circle text-yellow me-1" /> Cancelled
                  Jobs
                </span>{" "}
                <span className="sta-count">30</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-circle text-blue me-1" /> Pending Jobs
                </span>{" "}
                <span className="sta-count">30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsEmployer;
