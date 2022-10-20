import { useEffect } from 'react';
import personInfo from '../lib/personInfo';
export default function HobbieCarousel() {
  useEffect(() => {
    if (typeof window !== undefined) {
      const tailwind = require('tw-elements');
    }
  });

  return (
    <div id='carouselExampleCaptions' className='carousel slide  ' data-bs-ride='carousel'>
      <div className='carousel-inner  w-full overflow-hidden'>
        {personInfo.introduceMyself.hobbies.map((el, i) => {
          return (
            <div
              key={i}
              className={
                i === 0
                  ? 'carousel-item active  float-left w-full '
                  : 'carousel-item  float-left w-full'
              }
            >
              <img src={el.img} className='block w-full' alt={el.text} />
              <div className='carousel-caption  md:block absolute -bottom-[6%]    text-center'>
                {/* <h5 className='text-xl'>{el.text}</h5> */}
                <p className='bg-black rounded-full text-center '>{el.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
