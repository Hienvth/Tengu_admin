import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

//import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";
import "../../src/assets/css/tableDashboard.css"
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

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};
 
const Dashboard = () => {
  const [topCustomer, setTopCustomer] = useState([]);
  const [latestorders, setLatestOrder] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const topCustomerUrl = "https://tengu-nodejs.herokuapp.com/api/analytics/top-customer";
  const latestOrderUrl = "https://tengu-nodejs.herokuapp.com/api/analytics/latest-orders";
  const analyticsUrl = "https://tengu-nodejs.herokuapp.com/api/order/statistics"
  const token = localStorage.getItem("accessToken");
  

  useEffect(() => {
    axios.get(analyticsUrl, { headers: { token: token } })
    .then((response) => {
      setAnalytics(response.data);
    });
  },[]);

  useEffect(() => {
    axios.get(topCustomerUrl, { headers: { token: token } })
    .then((response) => {
      setTopCustomer(response.data.message);
    });
  },[]);

  useEffect(() => {
    axios.get(latestOrderUrl, { headers: { token: token } })
    .then((response) => {
      setLatestOrder(response.data.message);
    });
  },[]);


  const themeReducer = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
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
        <div className="col-6">
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
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>top customers</h3>
            </div>
            <div className="card__body1">
              {/* <Table
                // headData={topCustomers.head}
                // renderHead={(item, index) => renderCusomerHead(item, index)}
                // bodyData={topCustomers.body}
                // renderBody={(item, index) => renderCustomerBody(item, index)}
              /> */}
              <table>
                <thead>
                  <tr className="tb_left">
                  <th><a>ID</a></th>
                    <th><a>Username</a></th>
                    <th><a>Total Spending</a></th>
                  </tr>
                </thead>
                <tbody>
                {topCustomer.map((idx) => (
                    <tr id={idx._id}>
                       <td>#...{idx._id.slice(19,24)} </td>
                         <td>{idx.firstName} {idx.lastName}</td>
                        {/* <td>{idx.total_orders}</td> */}
                        <td style={{paddingLeft: "40px"}}>{idx.total_spending}</td>
                      </tr>
                  ))}
                </tbody>
              </table>


              
                
            </div>
            <div className="card__footer">
              <Link to="/admin/add">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>

            <div className="card__body1">
                  

                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th> Username</th>
                        <th >Total price</th>
                        <th>Date</th>
                        <th >Statusb</th>
                      </tr>
                    </thead>
                    <tbody>      
                      {latestorders.map((idx)=>(
                        <tr id={idx._id}>
                          <td>#...{idx._id.slice(19,24)}</td>
                          <td>{idx.customerId.firstName} {idx.customerId.lastName}</td>
                          <td>{idx.payableAmount}</td>
                          <td>{idx.createdAt.slice(0,10)}</td>
                          <td className="status">
                          <Badge type={orderStatus[(idx.status === "pending") ? "pending" : "paid"]} content={idx.status} />
                          </td>
                      </tr>
                       ))}
                  </tbody>
                  </table>
                  
             
     </div>
            <div className="card__footer">
              <Link to="/admin/orders">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
