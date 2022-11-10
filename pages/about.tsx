import ParticleBackground from '../components/Particle';
import { Navbar } from '../components/Navbar';
import personInfo from '../lib/personInfo';
import Badges from '../components/Badges';
import { FindMe } from '../components/FindMe';
import Carosuel from '../components/HobbieCarousel';

export default function About() {
  return (
    <>
      <Navbar />
      <div className=' text-white text-2xl'>
        <div className='pt-24 pt-26 ml-[10%] mr-[10%]'>
          {personInfo.introduceMyself.me}
          <br />
          <p className='text-center'>Interests & Hobbies</p>
          <Carosuel />
        </div>
      </div>
      <Badges />
      <FindMe />
      <ParticleBackground />
    </>
  );
}
