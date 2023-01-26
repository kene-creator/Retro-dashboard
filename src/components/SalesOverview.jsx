import { useEffect, useState } from 'react';
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
import { UilAngleUp } from '@iconscout/react-unicons';
import YearDropdown from './SelectYear';

const SalesOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or load data here and update the state
    setData(graphData);
  }, []);

  const graphData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <div className="h-[16rem] pb-6 pt-2 rounded-md box_shadow mt-3 bg-white w-[90%] mx-auto overflow-hidden">
      <div className="flex justify-between items-center mx-4 mb-0 pb-4 border-b border-[#12121224] ">
        <p className="text-[0.7rem] quicksand font-bold">Salse Overview</p>
        <button class="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600">
          + Add Offer
        </button>
      </div>
      <div className="mt-2 flex justify-between items-center px-4">
        <div className="flex font-semibold quicksand items-center justify-center">
          <p className="text-lg">$80,630</p>
          <p className="text-green-500 ml-4 flex justify-center items-center">
            <span className=" mr-3 h-4 bg-green-200 rounded-full w-4 flex justify-center">
              <UilAngleUp className="h-4" />
            </span>
            +6.7%
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="mr-4 quicksand flex justify-center items-center">
            <span className="w-[0.3rem] bg-blue-500 rounded-full h-[0.3rem] mr-2"></span>
            Incomes
          </p>
          <p className="mr-4 quicksand flex justify-center items-center">
            <span className="w-[0.3rem] bg-red-500 rounded-full h-[0.3rem] mr-2"></span>
            Expenses
          </p>
          <YearDropdown />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="72%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
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
          <Line type="monotone" dataKey="uv" stroke="#CA3433" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverview;
