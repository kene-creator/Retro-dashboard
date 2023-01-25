import { useState } from 'react';
import icons from '../assets/icons.svg';
import { UilEstate } from '@iconscout/react-unicons';

const SideBar = () => {
  const [active, setActive] = useState('Dashboard');
  const links = [
    'Dashboard',
    'Products',
    'Blog',
    'Transaction',
    'Users',
    'Analysis',
    'Reports',
    'Investments',
    'Settings'
  ];
  return (
    <div className="bg-white pl-5">
      <div>
        <a href="#" className="text-[3rem] font-bold text-blue-900">
          Retro
        </a>
      </div>
      <div>
        <ul className="quicksand">
          {links.map((link) => {
            let svg;
            switch (link) {
              case 'Dashboard':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-activity`} />
                  </svg>
                );
                break;
              case 'Products':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-shopping-bag`} />
                  </svg>
                );
                break;
              case 'Blog':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-shopping-cart`} />
                  </svg>
                );
                break;
              case 'Transaction':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-credit-card`} />
                  </svg>
                );
                break;
              case 'Users':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-users`} />
                  </svg>
                );
                break;
              case 'Analysis':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-bar-chart`} />
                  </svg>
                );
                break;
              case 'Reports':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-flag`} />
                  </svg>
                );
                break;
              case 'Investments':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-gift`} />
                  </svg>
                );
                break;
              case 'Settings':
                svg = (
                  <svg className="w-[1.3rem] h-[1rem] fill-[#1212128c]">
                    <use xlinkHref={`${icons}#icon-settings`} />
                  </svg>
                );
                break;
              default:
                svg = <svg>...</svg>;
            }

            return (
              <li
                key={link}
                className={`cursor-pointer mr-3 flex items-center justify-start py-3 px-3 bg-white mb-2 transition-all ease-out delay-100 ${
                  active === link
                    ? 'font-bold text-blue-900 bg-[#5567f44e] rounded-r-lg rounded-bl-lg transition-all ease-out pl-8 delay-200'
                    : 'text-gray-600 '
                }`}
                onClick={() => setActive(link)}
              >
                {svg}
                <span className={`ml-2`}>{link}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
