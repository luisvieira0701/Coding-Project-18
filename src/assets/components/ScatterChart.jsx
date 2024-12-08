import React from 'react';
import ChartComponent from './chartComponent.jsx';
//Create scatter chart displaying expenses and profits
const ScatterPlot = ({ data }) => {
    const scatterPlotData = {
     
      datasets: [
        {
            label: 'Expenses vs Profits',
            data: data.expenses.map((expense, index) => ({
              x: expense,
              y: data.profits[index], //expense and profit axis
            })),
            backgroundColor: 'rgba(25, 162, 130, 0.2)', 
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }
      ],
    };
    const scatterPlotOptions = {
        scales:  {
x: {
    title: {
    display: true,
   text: 'Expenses',
              },
              beginAtZero: false, 
            },
y: {
   title: {
    display: true,
    text: 'Profits',
              },
              beginAtZero: false,
            },
          },
        };

      return <ChartComponent type="scatter" data={scatterPlotData} options={scatterPlotOptions} />;
    };

 export default ScatterPlot