import personInfo from '../lib/personInfo';
export default function Badges() {
  return (
    <div className='my-10 flex flex-wrap   ml-[10%] mr-[10%] mb-10'>
      <p className=' text-center w-full text-3xl text-white  '>Skills</p>
      {personInfo.introduceMyself.badges.map((el, i) => {
        return (
          <p
            className='font-semibold m-2 text-mainColor cursor-pointer hover:border-mainColor/50   p-3 rounded-full w-auto mr-3 border-solid border-2 overflow-hidden border-mainColor'
            key={i}
          >
            {el}
          </p>
        );
      })}
    </div>
  );
}
