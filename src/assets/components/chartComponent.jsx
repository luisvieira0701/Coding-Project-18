import React, { useEffect, useRef } from 'react';

const ChartComponent = ({type, data, options}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Initialize chart on mount
        const chart = new window[type](chartRef.current, options) 
        chart.data = data;
        

        // Update chart on data change
        const updateChart = () => {
            chart.data = data;
            chart.update();
        };

        // Clean up chart on unmount
        return () => {
            chart.destroy();
        };
    }, [type, data, options]);
 
    return (
        <div ref={chartRef} style={{width: '100%', height: '100%'}} />
    );
};

export default ChartComponent;

