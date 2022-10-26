import personInfo from '../lib/personInfo';
import Link from 'next/link';
export function FindMe() {
  return (
    <>
      <p className=' mt-6 text-white text-3xl text-center w-screen'>Connect with me on</p>
      <br />
      <div className='mb-6 flex flex-wrap  text-purple-800 space-x-6  items-center justify-center w-full'>
        {personInfo.findMeOn.map((el, i) => {
          return (
            <a
              key={i}
              href={el.url}
              className=' rounded-full bg-white w-10 h-10  py-2   hover:scale-150 transition-all duration-100 shadow-lg hover:shadow-purple-500/40'
            >
              <el.icon size='24' color='fill' className='ml-auto mr-auto' />
            </a>
          );
        })}
      </div>
    </>
  );
}
