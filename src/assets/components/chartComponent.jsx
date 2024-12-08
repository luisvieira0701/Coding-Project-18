import React from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = React.createRef();

  React.useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: type,
      data: data,
      options: options
    });

    return () => {
      chart.destroy();
    };
  }, [type, data, options]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;