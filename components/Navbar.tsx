import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import personInfo from '../lib/personInfo';
import Link from 'next/link';
export function Navbar() {
  const [colorH, setColorH] = useState('bg-[#1b1a2ea9]');
  const [menu, setMenu] = useState(true);
  function menuHeight(num: Number) {
    // The most important implication of how Tailwind extracts class names
    //  is that it will only find classes that exist as complete
    //   unbroken strings in your source files so that's why
    // we're hard coding strings from values which allows us to animate the dropdown
    switch (num) {
      case 0:
        return 'h-16';
      case 1:
        return 'h-[120px]';
      case 2:
        return 'h-[180px]';
      case 3:
        return 'h-[240px]';
      case 4:
        return 'h-[300px]';
      case 5:
        return 'h-[360px]';
      case 6:
        return 'h-[420px]';
      case 7:
        return 'h-[480px]';
      case 8:
        return 'h-[520px]';
      default:
        'h-auto';
    }
  }
  return (
    <div
      className={`overflow-hidden ease-in-out duration-300 fixed  flex-col w-full  ${
        menu ? 'h-16' : menuHeight(personInfo.tabs.length)
      } shadow-2xl  ${colorH} text-white text-center sm:h-16 `}
    >
      <div className='flex content-between mx-10 justify-between p-2 '>
        <div className='text-purple-500 text-3xl font-semibold p-3 ml-6'>AJ</div>
        <div className='invisible sm:visible text-xl  flex   w-full sm:w-full overflow-hidden text-left align content-center align-center'>
          {personInfo.tabs.map((tab, i) => {
            return (
              <Link href={tab.url} key={i}>
                <div className='flex text-center p-3  shrink'>
                  <p className='pl-3 pt-1 cursor-pointer hover:text-purple-500'> {tab.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div onClick={() => setMenu(!menu)} className='w-12 p-2 text-purple-600 mr-6 sm:invisible '>
          {menu ? <GiHamburgerMenu size={32} /> : <AiOutlineClose size={32} />}
        </div>
      </div>
      <div className='text-xl px-16 flex flex-col  w-full sm:w-full overflow-hidden text-left align'>
        {personInfo.tabs.map((tab, i) => {
          return (
            <Link href={tab.url} key={i}>
              <div className='flex text-center p-3 '>
                {tab.icon}
                <p className='pl-3 pt-1 cursor-pointer hover:text-purple-500'> {tab.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
