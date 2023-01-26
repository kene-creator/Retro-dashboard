import React, { useState } from 'react';

const currentYear = new Date().getFullYear();
const yearRange = 10;
const startYear = currentYear - yearRange;
const endYear = currentYear + yearRange;
const years = Array.from(
  { length: endYear - startYear + 1 },
  (_, i) => startYear + i
);

const YearDropdown = () => {
  const [selectedYear, setSelectedYear] = useState(currentYear);

  return (
    <select
      onChange={(e) => setSelectedYear(e.target.value)}
      className="py-2 w-[6.5rem] bg-white border border-[#1212122e] rounded-md px-2"
    >
      <option value="" selected disabled>
        Year
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearDropdown;
