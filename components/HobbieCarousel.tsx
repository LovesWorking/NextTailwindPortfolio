import { useEffect, useState } from 'react';
import personInfo from '../lib/personInfo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function HobbieCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {personInfo.introduceMyself.hobbies.map((el, i) => {
        return (
          <div key={i}>
            <img className='w-[100%] ' src={el.img} />
            <p className='text-center'>{el.text}</p>
          </div>
        );
      })}
    </Slider>
  );
}
