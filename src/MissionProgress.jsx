import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Brighter colors

const MissionProgress = ({ missionName, completed, total }) => {
  const [chartSize, setChartSize] = useState(window.innerWidth <= 640 ? 150 : 200);

  useEffect(() => {
    const handleResize = () => {
      setChartSize(window.innerWidth <= 640 ? 150 : 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const data = [
    { name: 'Completed', value: Math.min(completed, total) },
    { name: 'Remaining', value: Math.max(0, total - completed) },
  ];

  // Customized Tooltip
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>{missionName}</h2>
      <PieChart width={chartSize} height={chartSize}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={chartSize / 2 - 10}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default MissionProgress;