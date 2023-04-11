import "./Statistics.scss";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "1st Assignment",
    "Quiz Number": 10,
    "Assignment Marks": 60,
    Watch: 48,
  },
  {
    name: "2nd Assignment",
    "Quiz Number": 7,
    "Assignment Marks": 60,
    Watch: 50,
  },
  {
    name: "3rd Assignment",
    "Quiz Number": 10,
    "Assignment Marks": 60,
    Watch: 40,
  },
  {
    name: "4th Assignment",
    "Quiz Number": 9,
    "Assignment Marks": 60,
    Watch: 45,
  },
  {
    name: "5th Assignment",
    "Quiz Number": 10,
    "Assignment Marks": 60,
    Watch: 55,
  },
  {
    name: "6th Assignment",
    "Quiz Number": 8,
    "Assignment Marks": 60,
    Watch: 50,
  },
  {
    name: "7th Assignment",
    "Quiz Number": 10,
    "Assignment Marks": 60,
    Watch: 40,
  },
];

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics-header">
        <h2>Statistics</h2>
      </div>

      <div className="container-center">
        <div className="statistics-container">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <ComposedChart width={1200} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="Quiz Number"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="Assignment Marks" barSize={40} fill="#0070f3" />
            <Line type="monotone" dataKey="Watch" stroke="#ff7300" />
          </ComposedChart>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
