import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';

const data = [
  { uv: 4000 },
  { uv: 3000 },
  { uv: 2000 },
  { uv: 2780 },
  { uv: 1890 },
  { uv: 2390 },
  { uv: 3490 },
];

// Array of colors for each bar
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080'];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}> {/* Increased height for visibility */}
        <BarChart 
          data={data} 
          layout="vertical"   // Set layout to vertical for horizontal bars
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <XAxis type="number" hide /> {/* Hide X-axis */}
          <Bar dataKey="uv" barSize={20}> {/* Set bar size */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
