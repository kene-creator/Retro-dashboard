import MainDashNav from './MainDashNav';
import SalesOverview from './SalesOverview';

const MainDash = () => {
  return (
    <div className="bg-[#9aaedd34] rounded-[2rem] mt-4">
      <MainDashNav />
      <SalesOverview />
    </div>
  );
};

export default MainDash;
