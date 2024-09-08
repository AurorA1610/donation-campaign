import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Total Donation", value: 66.7 },
  { name: "Your Donation", value: 33.3 },
];
const COLORS = ["#FF444A", "#00C49F"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-4xl font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const StatsPage = () => {
  return (
    <div className="mt-3 mb-6">
      <div className="flex justify-center items-center mb-6">
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={250}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex items-center justify-center md:flex-row flex-col">
        <div>
          <span className="text-lg text-zinc-950">Your Donation</span>
          <div
            className="rounded-sm inline-block ms-4"
            style={{
              backgroundColor: "#00C49F",
              width: "100px",
              height: "12px",
            }}
          ></div>
        </div>
        <div className="md:ms-24">
          <span className="text-lg text-zinc-950">Total Donation</span>
          <div
            className="rounded-sm inline-block ms-4"
            style={{
              backgroundColor: "#FF444A",
              width: "100px",
              height: "12px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
