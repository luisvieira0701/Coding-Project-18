import React from 'react';
import ChartComponent from './chartComponent.jsx';
//Create line chart displaying monthly profits

const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits, //displays profits in the axis
          backgroundColor: 'rgba(53, 20, 130, 0.2)', 
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const lineChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
    };

 export default LineChart
