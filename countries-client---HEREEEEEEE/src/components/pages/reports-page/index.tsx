import React, { Suspense, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
for (let index = 0; index < 300; index++) {
  data.push({
    name: `Page ${Math.ceil(Math.random() * 9)}`,
    uv: Math.ceil(Math.random() * 9999),
    pv: Math.ceil(Math.random() * 9999),
    amt: Math.ceil(Math.random() * 9999),
  });
}

export default function Reports() {
  const [size, setSize] = useState(300);
  const [d, setd] = useState(false);
  const ComponentChartMemo = React.memo(Chart);
  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => {
          setSize(300);
        }}
      >
        small
      </button>
      <button
        onClick={() => {
          setSize(500);
        }}
      >
        big
      </button>
      <ResponsiveContainer width="100%" height={size}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          {d && (
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      <ComponentChartMemo size={size} d={d} />
      <button
        onClick={() => {
          // setd([...d, {
          //     name: `Page ${Math.ceil(Math.random() * 9)}`,
          //     uv: Math.ceil(Math.random() * 9999),
          //     pv: Math.ceil(Math.random() * 9999),
          //     amt: Math.ceil(Math.random() * 9999),
          // }])
          setd(!d);
        }}
      >
        add
      </button>
    </div>
  );

  function Chart(props: any) {
    return (
      <ResponsiveContainer width="100%" height={props.size}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          {props.d && (
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
