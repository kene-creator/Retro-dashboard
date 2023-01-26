import icons from '../assets/icons.svg';
import avatar from '../assets/avatar.png';

const MainDashNav = () => {
  return (
    <div className="flex justify-between items-center ml-6 mt-4 mr-6">
      <div>
        <form action="" className="relative">
          <input
            placeholder="Search..."
            type="text"
            className="outline-none bg-gray-100 py-3 px-3 w-[15rem] rounded-md relative text-[0.8rem]"
          />
          <button>
            <svg className="w-[1.8rem] h-[1.3rem] fill-[#1212128c] absolute top-[0.7rem] right-[1rem]">
              <use xlinkHref={`${icons}#search`} />
            </svg>
          </button>
        </form>
      </div>
      <div className="flex quicksand">
        <div>
          <p className="font-semibold text-[0.8rem] ">Jamesbrown@example.com</p>
          <p className="text-right">Admin</p>
        </div>
        <div className="ml-6">
          <img src={avatar} alt="Admin picture" />
        </div>
      </div>
    </div>
  );
};

export default MainDashNav;
