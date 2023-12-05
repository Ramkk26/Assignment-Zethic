import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import Data from "./UserData";
import { Chart, ArcElement, Tooltip } from "chart.js";
import PieChart from '../Component/PieChart';
import PieCarAge from './PieCarAge';

Chart.register(ArcElement, Tooltip);

const generateRandomColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(`rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`);
  }
  return colors;
};

const PieCar = ({ ageRange }) => {
  const currentYear = 2023;
    console.log('ageRange', ageRange)
    console.log('Data', Data)
 
  const filteredData = Data.filter(user => {
    const age = user.age;
    return age >= ageRange[0] && age <= ageRange[1];
  });
  console.log('filteredData', filteredData)
 
  const userAges = filteredData.map(user => user.age);
  console.log('userAges', userAges)
  const ageCounts = userAges.reduce((counts, age) => {
    counts[age] = (counts[age] || 0) + 1;
    return counts;
  }, {});
  console.log('ageCounts', ageCounts)

 
  const backgroundColors = generateRandomColors(Object.keys(ageCounts).length);

 
  const pieData = {
    labels: Object.keys(ageCounts).map(age => `${age} Years (${ageCounts[age]} cars)`),
    datasets: [{
      data: Object.values(ageCounts),
      backgroundColor: backgroundColors,
      hoverOffset: 4,
    }],
  };

  return (
    <div>
      <h2>Car's Age Chart</h2>
      <Pie data={pieData} />
    </div>
  );
};

const BarCarModels = ({ ageRange }) => {
  
  const filteredData = Data.filter(car => {
    const age = 2023 - car.vMake;
    return age >= ageRange[0] && age <= ageRange[1];
  });
 
  const modelCounts = filteredData.reduce((counts, car) => {
    const model = car.vModel;
    counts[model] = (counts[model] || 0) + 1;
    return counts;
  }, {});

 
  const backgroundColors = generateRandomColors(Object.keys(modelCounts).length);

 
  const barData = {
    labels: Object.keys(modelCounts),
    datasets: [{
      label: 'Car Models Count',
      data: Object.values(modelCounts),
      backgroundColor: backgroundColors,
    }],
  };

  return (
    <div>
      <h2>Car's Models Chart</h2>
      <Bar data={barData} />
    </div>
  );
};

const ChartFilter = () => {
  const [ageRange, setAgeRange] = useState([15,20]);

  useEffect(() => {
 
  }, [ageRange]);

  const handleAgeRangeChange = (newRange) => {
    console.log(newRange)
    setAgeRange(newRange);
  };

  return (
    <div > 
      <label>
        Select Age Range:
        <select onChange={(e) => handleAgeRangeChange(e.target.value.split('-').map(Number))}>
       
       
          <option value="20-25">20 - 25</option>
          <option value="25-30">25 - 30</option>
          <option value="30-35">30 - 35</option>
          <option value="35-40">35 - 40</option>
          <option value="40-45">40 - 45</option>
          <option value="45-50">45 - 50</option>
          <option value="50-55">50 - 55</option>
          <option value="60-65">60 - 65</option>
          <option value="65-70">65 - 70</option>
          <option value="70-75">70 - 75</option>
          <option value="75-80">75 - 80</option>
          <option value="80-85">80 - 85</option>
          <option value="85-90">85 - 90</option>
          <option value="90-95">90 - 95</option>
   
        </select>
      </label>
      <div className='chartFilter'>
      <PieChart ageRange={ageRange} />
      <div>
        <h2>Car's Age</h2>
   <PieCarAge ageRange ={ageRange}/>
   </div>
      </div>
   
    </div>
  );
};

export default ChartFilter;
