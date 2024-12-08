import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [{
      label: 'Expenses vs. Profits',
      data: data.map((item) => ({ x: item.expenses, y: item.profits })),
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Expenses vs. Profits'
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <ChartComponent type="Scatter" data={chartData} options={options} />
  );
};

export default ScatterChart;