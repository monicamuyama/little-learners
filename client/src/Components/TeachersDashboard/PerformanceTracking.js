import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceTracking = () => {
  const data = [
    { name: 'Jan', Math: 80, Reading: 75, Science: 85 },
    { name: 'Feb', Math: 82, Reading: 78, Science: 83 },
    { name: 'Mar', Math: 85, Reading: 80, Science: 87 },
    { name: 'Apr', Math: 88, Reading: 82, Science: 90 },
    { name: 'May', Math: 90, Reading: 85, Science: 92 },
    { name: 'Jun', Math: 92, Reading: 87, Science: 91 },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Performance Tracking</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Math" stroke="#4CAF50" />
          <Line type="monotone" dataKey="Reading" stroke="#FFC107" />
          <Line type="monotone" dataKey="Science" stroke="#2196F3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceTracking;