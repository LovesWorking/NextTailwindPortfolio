import { GiHamburgerMenu } from 'react-icons/gi';
import {
  AiOutlineClose,
  AiOutlineHome,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { RiFilePaperLine } from 'react-icons/ri';
import { TiSocialLinkedin } from 'react-icons/ti';
import { Component, ReactElement } from 'react';
import { IconType } from 'react-icons';
import Carosuel from '../components/HobbieCarousel';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
// *********************************************************
// *The portfolio webpage pulls from this person object.*****
// *       This is the only file you need to edit.          *
// *********************************************************
interface PersonObject {
  name: { fName: string; lName: string };
  tabs: { icon: ReactElement; label: string; url: string }[];
  experinceTypeWritter: { myExperince: string[] };
  introduceMyself: {
    me: ReactElement;
    hobbies: { img: string; text: string }[];
    badges: string[];
  };
  findMeOn: { name: string; icon: IconType; url: string }[];
  projects: {
    name: string;
    icon: IconType;
    url: string;
    img: string;
    imgAlt: string;
    title: string;
    desc: string;
    techStack: string[];
  }[];
}
const personInfo: PersonObject = {
  name: {
    fName: 'Austin',
    lName: 'Johnson',
  },
  tabs: [
    { icon: <AiOutlineHome key={'home'} size={'32'} />, label: 'Home', url: '/' },
    { icon: <MdPersonOutline key={'about'} size={'32'} />, label: 'About', url: '/about' },
    {
      icon: <HiOutlineLightBulb key={'projects'} size={'32'} />,
      label: 'Projects',
      url: '/projects',
    },
  ],
  experinceTypeWritter: {
    myExperince: [
      'MERN Stack',
      'HTML, CSS, JavaScript',
      'NodeJS, ExpressJS',
      'ReactJS, NextJS',
      'Redux',
      'SQL, NoSQL',
      'Jest, React Testing Library, SuperTest',
      'Bcrypt',
      'Next Auth, OAuth',
      'Git (Hooks, Actions)',
      'Github',
      'Google Lighthouse',
      'Restful APIs',
      'Tailwind',
      'GraphQL(Apollo)',
      'NPM',
    ],
  },
  introduceMyself: {
    me: (
      <div className=' text-white text-2xl'>
        <p className='mt-3'>
          I inititally started programming in <span className='text-purple-500'>2006</span> with{' '}
          <span className='text-purple-500'>Visual Basic</span> and I have been hooked ever since!
        </p>
        <br />
        <p>
          The last few years I have been more focused in web development and mastering
          <span className='text-purple-500'> Full Stack </span>. I spend most of my time building
          projects with <span className='text-purple-500'>React</span>,{' '}
          <span className='text-purple-500'>Next.js</span>,{' '}
          <span className='text-purple-500'>Node</span> ,{' '}
          <span className='text-purple-500'>Express</span> and{' '}
          <span className='text-purple-500'>Tailwind</span>
        </p>
        <br />
        <p className='text-center'>Interests & Hobbies</p>
        <Carosuel />
      </div>
    ),
    hobbies: [
      { img: '/camping.gif', text: ' Camping With The Family' },
      { img: '/smashbro.gif', text: ' Super Smash Bros' },
      { img: '/dogwlak.gif', text: 'Walking the dog' },
      { img: '/botw.gif', text: ' Zelda BOTW' },
      { img: '/matrixCat.gif', text: ' Open Source' },
    ],
    badges: [
      'GraphQL(Apollo)',
      'Typescript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Redux',
      'Chart.js',
      'SQL (PostgreSQL)',
      'NoSQL',
      'Jest',
      'React Testing Library',
      'SuperTest',
      'Bcrypt',
      'JWTs',
      'OAuth',
      'Git (Hooks,Actions)',
      'Webpack',
      'Google Lighthouse',
      'NPM',
      'Puppeteer',
      'Restful APIs',
      'D3.js',
      'Tailwind',
    ],
  },
  findMeOn: [
    {
      name: 'GitHub',
      icon: AiFillGithub,
      url: 'https://github.com/LovesWorking',
    },
    {
      name: 'Linkedin',
      icon: TiSocialLinkedin,
      url: 'https://www.linkedin.com/in/lovesworking/',
    },
    {
      name: 'Instagram',
      icon: AiFillInstagram,
      url: 'https://www.Instagram.com/',
    },
    {
      name: 'Twitter',
      icon: AiOutlineTwitter,
      url: 'https://www.Twitter.com/in/',
    },
  ],
  projects: [
    {
      name: 'AirIot',
      icon: AiFillGithub,
      url: 'https://github.com/LovesWorking/Air-Iot',
      img: '/botw.gif',
      imgAlt: 'AirIot project Preview',
      title: 'Control non iot devices with air quality data ',
      desc: 'Manipulation of non iot-devices through air quality data with custom triggers to turn smart plugs on/off.',
      techStack: ['Next.js'],
    },
    {
      name: 'Air-Free',
      icon: AiFillGithub,
      url: 'https://www.linkedin.com/in/lovesworking/',
      img: '/botw.gif',
      imgAlt: 'Air-Free project Image',
      title: 'Global air quality interactive map highlighting air quality in your local area',
      desc: 'An Open Source global map to track air quality data around the world in real time while also keeping historical data backed up to allow easy comparing of air quality in your area ',
      techStack: ['Next.js', 'D3.js', 'GraphQL'],
    },
    {
      name: 'AirIot',
      icon: AiFillGithub,
      url: 'https://www.linkedin.com/in/lovesworking/',
      img: '/botw.gif',
      imgAlt: 'AirIot project Image',
      title: 'Control non iot devices with air quality data ',
      desc: 'Manipulation of non iot-devices through air quality data with custom triggers to turn smart plugs on/off.',
      techStack: ['Next.js'],
    },
  ],
};
export default personInfo;
