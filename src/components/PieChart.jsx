import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data for the Pie Chart
const data = [
  { name: 'Blue', value: 40 },    // Blue - 40%
  { name: 'Red', value: 30 },     // Red - 30%
  { name: 'Green', value: 20 },   // Green - 20%
  { name: 'Light Blue', value: 10 }, // Light Blue - 10%
];

// Colors to match each section of the pie
const COLORS = ['#0000FF', '#FF0000', '#008000', '#ADD8E6']; // Blue, Red, Green, Light Blue

// Function to calculate the positions of the labels on the Pie Chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class CustomPieChart extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* Title */}
        <h2>Custom Pie Chart</h2>

        {/* Custom Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#0000FF', marginRight: '5px' }}></div>
            Blue
          </div>
          <div style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#FF0000', marginRight: '5px' }}></div>
            Red
          </div>
          <div style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#008000', marginRight: '5px' }}></div>
            Green
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: '#ADD8E6', marginRight: '5px' }}></div>
            Light Blue
          </div>
        </div>

        {/* Recharts Pie Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150} // You can adjust the radius for a larger or smaller chart
              fill="#8884d8"
              dataKey="value"
            >
              {/* Map through the data to fill colors */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
