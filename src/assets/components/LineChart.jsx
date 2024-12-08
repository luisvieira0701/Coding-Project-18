import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [{
      label: 'Monthly Profits',
      data: data.map((item) => item.profits),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Monthly Profits'
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
    <ChartComponent type="Line" data={chartData} options={options} />
  );
};

export default LineChart;