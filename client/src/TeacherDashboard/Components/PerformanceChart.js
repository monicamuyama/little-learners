import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Performance.css';

const PerformanceChart = () => {
  const data = {
    labels: ['Alice', 'Bob', 'Charlie'],
    datasets: [
      {
        label: 'Performance Score',
        data: [85, 70, 90],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="performance-chart">
      <h2>Performance Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Performance;
