import { Navbar } from '../components/Navbar';
import ParticleBackground from '../components/Particle';
import { Projects } from '../components/Projects';
export default function projects() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='flex flex-wrap '>
        <h1 className='pt-36 text-center text-white text-3xl w-full pb-10'>Recent projects</h1>
        <Projects />
      </div>
      <ParticleBackground />
    </div>
  );
}
