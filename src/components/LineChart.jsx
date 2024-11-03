import React, { PureComponent } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'January', uv: 2 },
  { name: 'February', uv: 1 },
  { name: 'March', uv: 4 },
  { name: 'April', uv: 7 },
  { name: 'May', uv: 6 },
  { name: 'June', uv: 9 },
];

export default class Example extends PureComponent {
  handleDownload = () => {
    // Logic for downloading the report
    alert("Report downloaded");
  };

  render() {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h4 style={{ fontWeight: 'bold' }}>NCR Trends</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="uv" 
              stroke="#00C2C7" 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
        <button 
          onClick={this.handleDownload} 
          style={{ 
            marginTop: '20px', 
            padding: '10px 20px', 
            backgroundColor: '#f0f0f0', 
            border: '1px solid #ccc', 
            cursor: 'pointer' 
          }}
        >
          Download Report
        </button>
      </div>
    );
  }
}
