import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const ProgressChart = ({ data }) => {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="weight" />
    </LineChart>
  );
};

export default ProgressChart;