import type { NextPage } from 'next';
import { Navbar } from '../components/Navbar';
import Particle from '../components/Particle';
import { Greeting } from '../components/Greeting';
import { IntroduceMyself } from '../components/IntroduceMyself';
import { FindMe } from '../components/FindMe';
const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='flex flex-wrap justify-around mb-36'>
        <Greeting />
        <FindMe />
      </div>
      <Particle />
    </div>
  );
};

export default Home;
