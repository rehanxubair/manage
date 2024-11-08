import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis } from 'recharts';

const data = [
  { uv: 4000 },
  { uv: 3000 },
  { uv: 2000 },
  
];

// Array of colors for each bar
const colors = ['#FF0000' , '#0000FF' , '#808080'];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={100}> {/* Increased height for visibility */}
        <BarChart 
          data={data} 
          layout="vertical"   // Set layout to vertical for horizontal bars
          margin={{ top: 10, right: 20, left: 20, bottom: 40 }}
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
