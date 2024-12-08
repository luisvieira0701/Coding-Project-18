import React from 'react';
import ChartComponent from './chartComponent.jsx';

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,// sales in the axis
          backgroundColor: 'rgba(155, 0, 62, 0.2)', 
          borderColor: 'rgba(155, 0, 62, 1)',
          borderWidth: 1,
        },
      ],
    };
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true, //scaling
          },
        },
      };

      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };

 export default BarChart 
