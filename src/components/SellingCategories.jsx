import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SellingCategories = () => {
  const [series, setSeries] = useState([
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20]
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80]
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10]
    }
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    title: {
      text: ''
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Owner', 'Shoes', 'Jeans', 'T-shirts', 'Accessories', 'Cap']
    }
  });

  return (
    <div className="w-[20rem] bg-white rounded-md box_shadow h-[15rem] p-4 text-gray-400 overflow-scroll maindash">
      <p className="text-sm">Top Selling Categories</p>
      <div className="mt-[-1.2rem]">
        <ReactApexChart
          options={options}
          series={series}
          type="radar"
          height={250}
        />
      </div>
    </div>
  );
};

export default SellingCategories;
