import { useEffect } from 'react';
import personInfo from '../lib/personInfo';
export default function HobbieCarousel() {
  useEffect(() => {
    if (typeof window !== undefined) {
      const tailwind = require('tw-elements');
    }
  });

  return (
    <div id='carouselExampleCaptions' className='carousel slide relative' data-bs-ride='carousel'>
      <div className='carousel-inner relative w-full overflow-hidden'>
        {personInfo.introduceMyself.hobbies.map((el, i) => {
          return (
            <div
              key={i}
              className={
                i === 0
                  ? 'carousel-item active relative float-left w-full '
                  : 'carousel-item relative float-left w-full'
              }
            >
              <img src={el.img} className='block w-full' alt={el.text} />
              <div className='carousel-caption  md:block absolute text-center'>
                {/* <h5 className='text-xl'>{el.text}</h5> */}
                <p className='bg-black rounded-full text-center'>{el.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'
      >
        <span
          className='carousel-control-prev-icon inline-block bg-no-repeat'
          aria-hidden='true'
        ></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'
      >
        <span
          className='carousel-control-next-icon inline-block bg-no-repeat'
          aria-hidden='true'
        ></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
}
