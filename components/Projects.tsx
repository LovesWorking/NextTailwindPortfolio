import personInfo from '../lib/personInfo';
import { FindMe } from './FindMe';
export function Projects() {
  return (
    <div className='flex flex-wrap items-center justify-center '>
      {personInfo.projects.map((el, i) => {
        return (
          <>
            <div className=' mx-6 max-w-sm rounded-xl overflow-hidden shadow-xl shadow-mainColor mb-10'>
              <img className='w-full  ' src={el.img} alt={el.imgAlt} />
              <p className='text-center  text-mainColor  font-bold  '>{el.name}</p>

              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-white'>{el.title}</div>
                <p className='text-mainColor font-bold'>{el.desc} </p>
              </div>
              <div className='px-6 pt-4 pb-2 '>
                <div className='flex flex-wrap pb-3  text-mainColor space-x-6 ml-auto mr-auto'>
                  <a
                    key={i}
                    href={el.url}
                    className=' rounded-full bg-white w-10 h-10  py-2   hover:scale-150 transition-all duration-100 shadow-lg hover:shadow-mainColor/30'
                  >
                    <el.icon size='24' color='fill' className='ml-auto mr-auto' />
                  </a>
                </div>
              </div>
              <div className='flex flex-wrap'>
                <p className='text-white w-full text-center font-bold'>Tech Stack</p>
                {el.techStack.map((el, i) => {
                  return (
                    <p
                      key={i}
                      className='  text-center font-bold m-2 text-mainColor cursor-pointer hover:border-mainColor/50   p-3 rounded-full w-auto mr-3 border-solid border-2 overflow-hidden border-mainColor'
                    >
                      {el}
                    </p>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
      <FindMe />
    </div>
  );
}
