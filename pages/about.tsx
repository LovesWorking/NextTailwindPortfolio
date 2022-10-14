import ParticleBackground from '../components/Particle';
import { Navbar } from '../components/Navbar';
import personInfo from '../lib/personInfo';
import Badges from '../components/Badges';
export default function About() {
  return (
    <>
      <Navbar />
      <div className='pt-26 ml-[10%] mr-[10%]'>{personInfo.introduceMyself.me}</div>
      <Badges />
      <ParticleBackground />
    </>
  );
}
