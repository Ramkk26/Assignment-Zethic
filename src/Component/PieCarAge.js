import React from 'react';
import { Pie } from 'react-chartjs-2';
import Data from "./UserData";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

const carAges = Data.map((car) => {
  const currentYear = 2023;
  return currentYear - car.vYear;
});

 
const ageCounts = carAges.reduce((counts, age) => {
  counts[age] = (counts[age] || 0) + 1;
  return counts;
}, {});

 
const backgroundColors = Object.keys(ageCounts).map(() => {
  return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
});

const labels = Object.keys(ageCounts).map(age => `${age} Years (${ageCounts[age]} cars)`);
const cardata = {
  labels: labels,
  datasets: [{
    data: Object.values(ageCounts),
    backgroundColor: backgroundColors,
    hoverOffset: 10,
  }],
};
const options = {};

const PieCarAge = () => {
  return (
    <div>
      <Pie data={cardata} options={options} />
    </div>
  );
};

export default PieCarAge;
