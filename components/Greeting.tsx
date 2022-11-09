import Image from 'next/image';
import personInfo from '../lib/personInfo';
import desk from '/desk.svg';
import Typewriter from 'typewriter-effect';

export function Greeting() {
  return (
    <div className=' flex pt-36 px-12 flex-wrap justify-center m-1 p-1 ml-[10%] mr-[10%]'>
      <div>
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
          <p className=''>A software engineer with experince in</p>
        </h1>
        <div className='text-purple-500 text-4xl '>
          <Typewriter
            options={{
              strings: personInfo.experinceTypeWritter.myExperince,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='w-full '>
        <img
          className='mr-auto ml-auto'
          src='/programmerX.gif'
          alt='Person at desk programming'
          width='400'
          height='400'
        />
      </div>
    </div>
  );
}
