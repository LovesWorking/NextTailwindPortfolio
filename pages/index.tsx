import type { NextPage } from 'next';
import { Header } from '../components/Header';
import Particle from '../components/Particle';
import { Data } from '../components/Data';
const Home: NextPage = () => {
  return (
    <div className='scroll-auto'>
      <Header />
      <Data />
      <Particle />
    </div>
  );
};

export default Home;
