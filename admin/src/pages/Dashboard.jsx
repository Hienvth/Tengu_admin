import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Chart from "react-apexcharts";

import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";

//import Table from "../components/table/Table";

import Badge from "../components/badge/Badge";

import statusCards from "../assets/JsonData/status-card-data.json";

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

// const topCustomers = {
//   head: ["user", "total spending"],
//   body: [
//       {
//           username: "john doe",
//           order: "490",
//           price: "$15,870"
//       },
//       {
//           "username": "frank iva",
//           "order": "250",
//           "price": "$12,251"
//       },
//       {
//           "username": "anthony baker",
//           "order": "120",
//           "price": "$10,840"
//       },
//       {
//           "username": "frank iva",
//           "order": "110",
//           "price": "$9,251"
//       },
//       {
//           "username": "anthony baker",
//           "order": "80",
//           "price": "$8,840"
//       }
//   ]
// };

// const renderCusomerHead = (item, index) => <th key={index}>{item}</th>;

// const renderCustomerBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.firstName}</td>
//     <td>{item.order}</td>
//     <td>{item.price}</td>
//   </tr>
// );

// const latestOrders = {
//   header: ["order id", "user", "total price", "date", "status"],
//   body: [
//     {
//       id: "#OD1711",
//       user: "john doe",
//       date: "17 Jun 2021",
//       price: "$900",
//       status: "shipping",
//     },
//     {
//       id: "#OD1712",
//       user: "frank iva",
//       date: "1 Jun 2021",
//       price: "$400",
//       status: "paid",
//     },

//     {
//       id: "#OD1713",
//       user: "anthony baker",
//       date: "27 Jun 2021",
//       price: "$200",
//       status: "pending",
//     },
//     {
//       id: "#OD1712",
//       user: "frank iva",
//       date: "1 Jun 2021",
//       price: "$400",
//       status: "paid",
//     },
//     {
//       id: "#OD1713",
//       user: "anthony baker",
//       date: "27 Jun 2021",
//       price: "$200",
//       status: "pending",
//     },
//   ],
// };

const orderStatus = {
  shipping: "primary",
  pending: "warning",
  paid: "success",
  refund: "danger",
};

// // const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

// // const renderOrderBody = (item, index) => (
// //   <tr key={index}>
// //     <td>{item.id}</td>
// //     <td>{item.user}</td>
// //     <td>{item.price}</td>
// //     <td>{item.date}</td>
// //     <td>
// //       <Badge type={orderStatus[item.status]} content={item.status} />
// //     </td>
// //   </tr>
// );
//???? 
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
            <div className="card__body">
              {/* <Table
                // headData={topCustomers.head}
                // renderHead={(item, index) => renderCusomerHead(item, index)}
                // bodyData={topCustomers.body}
                // renderBody={(item, index) => renderCustomerBody(item, index)}
              /> */}
              <tr>
                <td><b>Username</b></td>
                <td><b>Total Spending</b></td>
              </tr>
              {topCustomer.map((idx) => (
                  <tr id={idx._id}>
                      <td>{idx.firstName}</td>
                      {/* <td>{idx.total_orders}</td> */}
                      <td style={{paddingLeft: "40px"}}>{idx.total_spending}</td>
                    </tr>
                ))}
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>latest orders</h3>
            </div>
            <div className="card__body">
              {/* <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              /> */}
              <tr>
                <td><b>ID</b></td>
                <td style={{paddingLeft: "25px"}}><b>Username</b></td>
                <td style={{paddingLeft: "40px"}}><b>Total price</b></td>
                <td style={{paddingLeft: "40px"}}><b>Date</b></td>
                <td style={{paddingLeft: "70px"}}><b>Status</b></td>
              </tr>
              {latestorders.map((idx)=>(
                <tr id={idx._id}>
                  <td>{idx._id.slice(10,15)}</td>
                  <td style={{paddingLeft: "50px"}}>{idx.customerName}</td>
                  <td style={{paddingLeft: "40px"}}>{idx.payableAmount}</td>
                  <td style={{paddingLeft: "10px"}} >{idx.createdAt.slice(0,10)}</td>
                  <td style={{paddingLeft: "60px"}}>
                    <Badge type={orderStatus[(idx.status === "pending") ? "pending" : "paid"]} content={idx.status} />
                  </td>
              </tr>
              ))}
            </div>
            <div className="card__footer">
              <Link to="/">view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
