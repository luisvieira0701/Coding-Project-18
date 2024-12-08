import { useEffect, useState } from 'react'
import BarChart from './assets/components/BarChart.jsx' 
import LineChart from './assets/components/LineChart.jsx' 
import ScatterChart from './assets/components/ScatterChart.jsx' 
import BubbleChart from './assets/components/BubbleChart.jsx' 
import './App.css'

function App() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('financial_data CC18.json');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  )
}

export default App
