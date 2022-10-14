import personInfo from '../lib/personInfo';
export default function Badges() {
  return (
    <div className='my-10 flex flex-wrap   ml-[10%] mr-[10%]'>
      {personInfo.introduceMyself.badges.map((el, i) => {
        return (
          <p
            className='text-purple-500  w-20 border-solid border-2 overflow-hidden border-purple-500'
            key={i}
          >
            {el}
          </p>
        );
      })}
    </div>
  );
}
