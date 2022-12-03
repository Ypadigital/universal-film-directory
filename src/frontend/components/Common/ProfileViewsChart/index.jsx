import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDataContext } from "../../../contexts/dataContext";
import produce from "immer";
import { lineChartOptions, getLastMonths } from "../../../utils/helpers";

export default function ProfileViewsChart() {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const [filter, setfilter] = useState("six");

  const handleChangeFilter = (e) => {
    const value = e.target.value;
    setfilter(value);
  };

  let { user } = useDataContext();
  const userData = user && !!!user.isLoading ? user.data : null;
  const views = userData?.views || null;

  const sixMonthData = {
    options: {
      ...lineChartOptions,
      xaxis: { categories: getLastMonths(6) },
    },
    series: [
      {
        name: "Profile Views",
        data: [],
      },
    ],
  };

  const twelveMonthData = {
    options: {
      ...lineChartOptions,
      xaxis: { categories: getLastMonths(12) },
    },
    series: [
      {
        name: "Profile Views",
        data: [],
      },
    ],
  };

  useEffect(() => {
    if (userData && filter === "six") {
      const ySeries = views["six"].map((view) => view.y);

      const newData1 = produce(sixMonthData, (draft) => {
        draft.series[0].data = ySeries;
      });

      chartRef1.current.chart.ctx.updateOptions({ ...newData1 });
    }
  }, [sixMonthData, filter, userData, views]);

  useEffect(() => {
    if (userData && filter === "twelve") {
      const ySeries = views["twelve"].map((view) => view.y);

      const newTwelveMonthData = produce(twelveMonthData, (draft) => {
        draft.series[0].data = ySeries;
      });

      chartRef2.current.chart.ctx.updateOptions({ ...newTwelveMonthData });
    }
  }, [twelveMonthData, filter, userData, views]);

  return (
    <div className="card flex-fill">
      <div className="pro-head">
        <h5 className="card-title mb-0">Your Profile Views</h5>
        <div className="month-detail">
          <select
            value={filter}
            onChange={handleChangeFilter}
            className="form-control"
          >
            <option value={"six"}>Last 6 months</option>
            <option value={"twelve"}>Last 12 months</option>
          </select>
        </div>
      </div>
      <div className="pro-body">
        <div className={`mixed-chart ${filter === "twelve" && "d-none"}`}>
          <Chart
            ref={chartRef1}
            options={sixMonthData.options}
            series={sixMonthData.series}
          />
        </div>
        <div className={`mixed-chart ${filter === "six" && "d-none"}`}>
          <Chart
            ref={chartRef2}
            options={twelveMonthData.options}
            series={twelveMonthData.series}
          />
        </div>
      </div>
    </div>
  );
}
