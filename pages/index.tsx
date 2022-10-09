import type { NextPage } from 'next';
import { Header } from '../components/Header';
import Particle from '../components/Particle';
import { Data } from '../components/Data';
import { Greeting } from '../components/Greeting';
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-around'>
        <Greeting />
      </div>
      <Data />
      <Particle />
    </div>
  );
};

export default Home;
