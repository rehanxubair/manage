import { Box, useTheme } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { tokens } from "../theme";

// Data for the Pie Chart
const data = [
  { name: 'Blue', value: 40 },    // Blue - 40%
  { name: 'Red', value: 30 },     // Red - 30%
  { name: 'Green', value: 20 },   // Green - 20%
  { name: 'Light Blue', value: 10 }, // Light Blue - 10%
];

// Colors for the Pie Chart sections
const COLORS = ['#0000FF', '#FF0000', '#008000', '#ADD8E6']; // Blue, Red, Green, Light Blue

// Function to render custom label positions on the Pie chart
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

// Custom Pie Chart Component with Reduced Size
const ProgressCircle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Title */}
      <h2>Custom Pie Chart</h2>

      {/* Custom Legend for the Pie Chart */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '-10px' }}>
        <Box sx={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '15px', height: '15px', backgroundColor: '#0000FF', marginRight: '5px' }}></Box>
          Blue
        </Box>
        <Box sx={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '15px', height: '15px', backgroundColor: '#FF0000', marginRight: '5px' }}></Box>
          Red
        </Box>
        <Box sx={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '15px', height: '15px', backgroundColor: '#008000', marginRight: '5px' }}></Box>
          Green
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '15px', height: '15px', backgroundColor: '#ADD8E6', marginRight: '5px' }}></Box>
          Light Blue
        </Box>
      </Box>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90} // Reduced the outer radius
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ProgressCircle;
