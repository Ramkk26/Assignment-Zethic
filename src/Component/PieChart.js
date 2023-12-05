import React from 'react';
import { Pie } from 'react-chartjs-2';
import Data from "./UserData";
import { Chart, ArcElement,Tooltip } from "chart.js";

Chart.register(ArcElement,Tooltip );

 
function distinctModelByMake(dataset) {
  const count = {};
  dataset.forEach(item => {
    if (Object.prototype.hasOwnProperty.call(count, item.vMake)) {
      if (Object.prototype.hasOwnProperty.call(count[item.vMake], item.vModel)) {
        count[item.vMake][item.vModel]++;
      } else {
        count[item.vMake] = { ...count[item.vMake], [item.vModel]: 1 };
      }
    } else {
      count[item.vMake] = { [item.vModel]: 1 };
    }
  });
  return count;
}



const PieChartsContainer = ({ ageRange }) => {
  const filteredData = Data.filter(user => {
    const age = user.age;
    return age >= ageRange[0] && age <= ageRange[1];
  });
  const modelMakeObject = distinctModelByMake(filteredData);
 
  const carMakers = Object.keys(modelMakeObject);
  const PieCharts = carMakers.map((carMaker, index) => {
   
    const modelCounts = Object.values(modelMakeObject[carMaker]);
    const modelNames = Object.keys(modelMakeObject[carMaker]);
  
 
    const backgroundColors = modelCounts.map(() => {
      return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;
    });
  
    const cardata = {
      labels: modelNames,
      datasets: [{
        data: modelCounts,
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      }],
    };
    const options={};
  
    return (
      <div key={index}>
        <h2>{carMaker}</h2>      
        <Pie data={cardata}  options={options}/>
      </div>
    );
  });
  return (
    <div>
      {PieCharts}
    </div>
  );
};

export default PieChartsContainer;
