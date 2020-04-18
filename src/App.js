import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import logo from "./logo.svg";
import "./App.css";
import ReactHighcharts from "react-highcharts";
import moduleName from "module";
import temp from "./HOC/temp";

const config = {
  /* HighchartsConfig */
  title: {
    text: "Solar Employment Growth by Sector, 2010-2016",
  },

  subtitle: {
    text: "Source: thesolarfoundation.com",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: "Installation",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: "Manufacturing",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: "Sales & Distribution",
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: "Project Development",
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: "Other",
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};

const modal = document.getElementById("modal");

function App(props) {
  console.warn(props);
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await localStorage.getItem("token");
        setToken(res);
      } catch (error) {
        console.warn("token is not available");
      }
    };

    getToken();

    const token1 = {
      type: "bearer",
      expireTime: 121212,
      key: "abbddd",
    };

    localStorage.setItem("token", JSON.stringify(token1));

    sessionStorage.setItem("token", JSON.stringify(token1));
  });

  return (
    <>
      <ReactHighcharts config={config}></ReactHighcharts>
      {ReactDOM.createPortal(<div>THis is modal</div>, modal)}
    </>
  );
}

export default temp(App);
