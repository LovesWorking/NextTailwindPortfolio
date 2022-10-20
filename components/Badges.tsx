import personInfo from '../lib/personInfo';
export default function Badges() {
  return (
    <div className='my-10 flex flex-wrap   ml-[10%] mr-[10%]'>
      {personInfo.introduceMyself.badges.map((el, i) => {
        return (
          <p
            className='m-2 text-purple-500 cursor-pointer hover:border-purple-600 hover:scale-x-125  p-3 rounded-full w-auto mr-3 border-solid border-2 overflow-hidden border-purple-500'
            key={i}
          >
            {el}
          </p>
        );
      })}
    </div>
  );
}
