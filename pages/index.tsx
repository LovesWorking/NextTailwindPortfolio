import type { NextPage } from 'next';
import { Header } from '../components/Header';
import Particle from '../components/Particle';
import { Greeting } from '../components/Greeting';
import { IntroduceMyself } from '../components/IntroduceMyself';
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-wrap justify-around'>
        <Greeting />
        <IntroduceMyself />
      </div>
      <Particle />
    </div>
  );
};

export default Home;
