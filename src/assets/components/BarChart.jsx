import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [{
      label: 'Monthly Sales',
      data: data.map((item) => item.sales),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Monthly Sales'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <ChartComponent type="Bar" data={chartData} options={options} />
  );
};

export default BarChart;
