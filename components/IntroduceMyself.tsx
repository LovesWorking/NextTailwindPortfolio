import personInfo from '../lib/personInfo';
export function IntroduceMyself() {
  return (
    <div className='flex m-1 p-1 ml-[10%] mr-[10%]'>
      <div className='flex flex-col'>
        <p className='mb-10 text-white text-4xl mt-16 text-center'>
          LET ME <span className='text-purple-500'>INTRODUCE</span> MYSELF
        </p>
        {personInfo.introduceMyself.me}
      </div>
    </div>
  );
}
