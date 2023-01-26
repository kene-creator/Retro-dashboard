import Cards from './Cards';
import MainDashNav from './MainDashNav';
import SalesOverview from './SalesOverview';
import Information from './Information';

const MainDash = () => {
  return (
    <div className="maindash bg-[#9aaedd34] rounded-[2rem] mt-4 overflow-y-auto">
      <MainDashNav />
      <SalesOverview />
      <Cards />
      <Information />
    </div>
  );
};

export default MainDash;
