import { useState } from 'react'
import ChartComponent from './assets/components/ChartComponent.jsx';
import BarChart from './assets/components/BarChart.jsx' 
import './App.css'

function App() {
  return ( 
    <div>
      <h1>My Simple Chart</h1>
      <BarChart />
    </div>
  );
}

export default App
