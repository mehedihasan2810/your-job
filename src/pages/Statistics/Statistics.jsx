import "./Statistics.scss";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "A1",
    QuizNumber: 30,
    AssignmentMarks: 60,
    Watch: 48,
  },
  {
    name: "A2",
    QuizNumber: 10,
    AssignmentMarks: 60,
    Watch: 50,
  },
  {
    name: "A3",
    QuizNumber: 20,
    AssignmentMarks: 60,
    Watch: 40,
  },
  {
    name: "A4",
    QuizNumber: 9,
    AssignmentMarks: 60,
    Watch: 45,
  },
  {
    name: "A5",
    QuizNumber: 10,
    AssignmentMarks: 60,
    Watch: 55,
  },
  {
    name: "A6",
    QuizNumber: 8,
    AssignmentMarks: 60,
    Watch: 50,
  },
  {
    name: "A7",
    QuizNumber: 10,
    AssignmentMarks: 60,
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
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart width={1200} height={400} data={data}>
              <XAxis
                dataKey="name"
                // angle={45}
                textAnchor="start"
                // height={95}
                // tick={{ fontSize: 14 }}
              />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={46} />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                dataKey="QuizNumber"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="AssignmentMarks" barSize={40} fill="#0070f3">
                <LabelList dataKey="AssignmentMarks" position="top" />
              </Bar>
              <Line type="monotone" dataKey="Watch" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
