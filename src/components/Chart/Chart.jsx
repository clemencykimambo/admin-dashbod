import React from 'react';
import {  LineChart, Line,  XAxis, YAxis, ResponsiveContainer } from 'recharts';
import "./Chart.css"

 function Chart() {

  const data = [
    {
      name: 'Jan',
      Active: 4000,
    },
    {
      name: 'Feb',
      Active: 3000,
    },
    {
      name: 'mar',
      Active: 2000,
    },
    {
      name: 'April',
      Active: 2780,
    },
    {
      name: 'May',
      Active: 1890,
    },
    {
      name: 'Jun',
      Active: 2390,
    },
    {
      name: 'Jul',
      Active: 3490,
    },
  ];

return(
    <div className="chart">
      <h3 className="chartTitle"> Sales analytics</h3>

      <ResponsiveContainer width="100%" aspect={4/1}>
         < LineChart data={data}>
           <XAxis  />
           <Line type='Monotone' dataKey="Active" stroke="#555obd"/>
           <YAxis />
         </LineChart>
      </ResponsiveContainer >
    </div>
)
  
}
export default Chart