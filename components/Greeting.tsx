import Image from 'next/image';
import personInfo from '../lib/personInfo';
import desk from '/desk.svg';
export function Greeting() {
  return (
    <div className=' flex pt-36 px-12 flex-wrap  justify-center '>
      <h1 className=' text-white font-light  text-4xl '>
        <div className='flex'>
          Hi There!
          <p>&nbsp;&nbsp;👋🏻</p>
        </div>
        <br />
        <p className=''>
          I&apos;M&nbsp;
          <strong className='uppercase text-purple-500'> {personInfo.name.fName}&nbsp;</strong>
          <strong className='uppercase text-purple-500'> {personInfo.name.lName}</strong>
        </p>
      </h1>
      <img className='' src='/desk.svg' alt='Person at desk programming' width='250' height='250' />
    </div>
  );
}
