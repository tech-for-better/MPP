import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// perhaps a bar graph showing 2 bars, the number of meditations and workouts completed
// (even if they did the same video multiple times)
// of any category

const data = [
  {
    name: "Mind",
    Mind: 4000,
  },
  { name: "Body", Body: 1000 },
];

const Chart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
      barGap={-100}
      barCategoryGap={50}
      style={{ overflow: "hidden" }}
    >
      <CartesianGrid strokeDasharray='1 10' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Mind' fill=' pink' />
      <Bar dataKey='Body' fill=' orange)' />
    </BarChart>
  );
};

export default Chart;
