import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiFilePaperLine } from 'react-icons/ri';

export function Header() {
  const [colorH, setColorH] = useState('bg-[#1b1a2ea9]');
  const [menu, setMenu] = useState(false);
  // useEffect(() => {
  //   setColorH('bg-[#1b1a2ea9]');
  // }, []);
  return (
    <div
      className={`ease-in-out duration-300 fixed flex flex-col w-full ${
        menu ? 'h-16' : 'h-72'
      } shadow-2xl  ${colorH} text-white text-center`}
    >
      <div className='flex  content-between justify-between'>
        <div className='text-purple-500 text-3xl font-semibold p-3 ml-6'>AJ</div>
        <div onClick={() => setMenu(!menu)} className='w-12 p-2 text-purple-600 mr-6  '>
          {menu ? <GiHamburgerMenu size={'fill'} /> : <AiOutlineClose size={'fill'} />}
        </div>
      </div>
      <div className='text-xl px-16 flex flex-col w-full overflow-hidden text-left'>
        <div className='flex text-center p-3'>
          <AiOutlineHome size={32} />
          <p className='pl-3 pt-1'> Home</p>
        </div>
        <div className='flex text-center p-3'>
          <MdPersonOutline size={32} />
          <p className='pl-3 pt-1'> About</p>
        </div>
        <div className='flex text-center p-3'>
          <HiOutlineLightBulb size={32} />
          <p className='pl-3 pt-1'> Projects</p>
        </div>
        <div className='flex text-center p-3'>
          <RiFilePaperLine size={32} />
          <p className='pl-3 pt-1'> Resume</p>
        </div>
      </div>
    </div>
  );
}
