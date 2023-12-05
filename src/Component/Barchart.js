import React from 'react';
import { Bar } from 'react-chartjs-2';
import Data from "./UserData";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const userNo = Data.reduce((countByCountry, user) => {
  const { country } = user;

  if (!countByCountry[country]) {
    countByCountry[country] = 1;
  } else {
    countByCountry[country]++;
  }

  return countByCountry;
}, {});

const countries = Object.keys(userNo);  
const userCounts = Object.values(userNo);  
const backgroundColors = Object.keys(userNo).map(() => {
  return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
});
const datas = {
  labels: countries,
  datasets: [
    {
      label: "User Count",
      data: userCounts,
      backgroundColor:backgroundColors,
      hoverOffset: 10,

    },
  ],
};

const Barchart = () => {
  return <Bar data={datas} />;
};

export default Barchart;
