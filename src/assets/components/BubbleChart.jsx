import React from 'react';
import ChartComponent from './ChartComponent.jsx';

const BubbleChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [{
      label: 'Sales, Profits, and Expenses',
      data: data.map((item) => ({ x: item.sales, y: item.profits, r: item.expenses })),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    title: {
      display: true,
      text: 'Sales, Profits, and Expenses'
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
    <ChartComponent type="Bubble" data={chartData} options={options} />
  );
};

export default BubbleChart;

