import React, { useState, useEffect } from 'react';
import BarChart from './assets/components/BarChart.jsx';
import LineChart from './assets/components/LineChart.jsx';
import ScatterPlot from './assets/components/ScatterChart.jsx';
import BubbleChart from './assets/components/BubbleChart.jsx';
import './App.css';

function App() {    
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
      fetch('public/financial_data CC18.json')
        .then((response) => response.json())
        .then((data) => setChartData(data));
    }, []);

    if (!chartData) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Dynamic Charts with React and Chart.js</h1>

        <h2>Relationship between sales and months</h2>
        <BarChart data={chartData} />

        <h2>Relationship between profits and months</h2>
        <LineChart data={chartData} />

        <h2>Relationship between expenses and profits</h2>
       <ScatterPlot data={chartData} />

        <h2>Analyzing sales, expenses, and profits</h2>
         <BubbleChart data={chartData} /> 
      </div>
    );
}

export default App