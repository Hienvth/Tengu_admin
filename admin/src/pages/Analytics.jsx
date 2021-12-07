import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

import statusCards from "../assets/JsonData/status-card-data.json";
import axios from "axios";

const chartOptions = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
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
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

const Analytics = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode);
  const [analytics, setAnalytics] = useState({});
  const analyticsUrl =
    "https://tengu-nodejs.herokuapp.com/api/order/statistics";
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    axios.get(analyticsUrl, { headers: { token: token } }).then((response) => {
      setAnalytics(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="page-header">Analytics</h2>
      <div className="row">
        <div className="col-12">
          <div className="card__body">
            <div className="card full-height">
              <div className="col-12">
                <div className="row">
                  <div className="col-6" id="1">
                    <StatusCard
                      icon="bx bx-shopping-bag"
                      count={analytics.totalSales}
                      title="Total sales"
                    />
                  </div>
                  <div className="col-6" id="2">
                    <StatusCard
                      icon="bx bx-dollar-circle"
                      count={analytics.totalIncome}
                      title="Total income"
                    />
                  </div>
                  <div className="col-6" id="3">
                    <StatusCard
                      icon="bx bx-receipt"
                      count={analytics.totalOrders}
                      title="Total orders"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="card full-height">
                {/* chart */}
                <Chart
                  options={
                    themeReducer === "theme-mode-dark"
                      ? {
                          ...chartOptions.options,
                          theme: { mode: "dark" },
                        }
                      : {
                          ...chartOptions.options,
                          theme: { mode: "light" },
                        }
                  }
                  series={chartOptions.series}
                  type="line"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
