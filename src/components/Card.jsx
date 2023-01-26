import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import ReactApexChart from 'react-apexcharts';

const Card = (props) => {
  const [expanded, setexpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setexpanded={() => setexpanded(false)} />
      ) : (
        <CompactCard param={props} setexpanded={() => setexpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

const CompactCard = ({ param, setexpanded }) => {
  return (
    <motion.div
      className={`flex justify-between items-center w-[13rem] mr-4 p-4 rounded-md box_shadow ${
        param.index === 0
          ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
          : 'bg-white'
      }`}
      onClick={setexpanded}
      layoutId="expandableCard"
    >
      <div>
        <p>{param.title}</p>
        <p className="text-xl quicksand font-medium mt-4">${param.amount}</p>
      </div>
      <div>
        <img src={param.img} alt="" className="w-[5rem]" />
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ param, setexpanded }) => {
  const [series, setSeries] = useState([
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z'
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  });

  return (
    <motion.div
      className="flex relative box_shadow bg-white rounded-md h-[37vh] w-[20rem] z-[9] mx-4"
      layoutId="expandableCard"
    >
      <UilTimes
        onClick={setexpanded}
        className="absolute top-1 right-2 cursor-pointer"
      />
      <div>
        <p className="font-semibold text-[.8rem] ml-4 mt-4 whitespace-nowrap">
          {param.title}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center ml-[-6rem]">
        <ReactApexChart
          type="area"
          height={200}
          series={series}
          options={options}
        />
      </div>
    </motion.div>
  );
};

export default Card;
