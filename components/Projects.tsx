import personInfo from '../lib/personInfo';
import { FindMe } from './FindMe';
export function Projects() {
  return (
    <div className='flex flex-wrap items-center justify-center '>
      {personInfo.projects.map((el, i) => {
        return (
          <>
            <div className=' mx-6 max-w-sm rounded-xl overflow-hidden shadow-lg shadow-purple-500 mb-10'>
              <img className='w-full  ' src={el.img} alt={el.imgAlt} />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-white'>{el.title}</div>
                <p className='text-purple-500 font-bold'>{el.desc} </p>
              </div>
              <div className='px-6 pt-4 pb-2 '>
                <div className='flex flex-wrap pb-3  text-purple-800 space-x-6 ml-auto mr-auto'>
                  <a
                    key={i}
                    href={el.url}
                    className=' rounded-full bg-white w-10 h-10  py-2   hover:scale-150 transition-all duration-100 shadow-lg hover:shadow-purple-500/40'
                  >
                    <el.icon size='24' color='fill' className='ml-auto mr-auto' />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <FindMe />
    </div>
  );
}
