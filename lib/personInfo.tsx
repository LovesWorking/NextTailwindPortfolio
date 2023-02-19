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
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
// *********************************************************
// *The portfolio webpage pulls from this person object.*****
// *       This is the only file you need to edit.          *
// *********************************************************
interface PersonObject {
  mainSiteColor: string;
  name: { fName: string; lName: string };
  tabs: { icon: ReactElement; label: string; url: string }[];
  experinceTypeWritter: { myExperince: string[]; homeImage: { src: string; alt: string } };
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
  mainSiteColor: 'mainColor',
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
    homeImage: { src: '/programmerX.gif', alt: 'Person at desk programming' },
  },
  introduceMyself: {
    me: (
      <h1>
        <p className='mt-3'>
          I inititally started programming in <span className='text-mainColor'>2006</span> with{' '}
          <span className='text-mainColor'>Visual Basic</span> and I have been hooked ever since!
        </p>
        <br />
        <p>
        I'm a seasoned software developer with a passion for building high-quality, scalable, and robust web applications. I first dipped my toes into the world of programming 16 years ago, working with Visual Basic, and I've been hooked ever since. Over the years, I've honed my skills, becoming proficient in various programming languages, frameworks, and libraries.

My love for programming took me on a thrilling ride a few years ago when I ventured into web development, which quickly became my specialty. I was ecstatic to be accepted into a tech accelerator program that challenged me to become a full-stack developer using cutting-edge technologies like React and Node.js. The 90-day program was a fantastic learning experience, allowing me to work on various projects, tackle complex problems, and refine my skills to an unprecedented level.

After graduating from the accelerator, I took my passion to the next level by joining B2E, a similar program that focused on Angular and .NET. Over the intense 12-week course, I learned how to craft responsive and innovative web applications that cater to the needs of modern users. As a result, I gained invaluable experience in building web applications from scratch, collaborating with other developers, and working under tight deadlines.

Throughout my career, I've built a plethora of full-stack web applications, both as an individual and as part of a team. My focus has always been on creating products that are intuitive, user-friendly, and responsive. I love the thrill of the creative process, from designing the architecture to writing code and testing the product. There's nothing like seeing a project come to fruition, knowing that it solves a problem and makes people's lives easier.

To sum it up, I'm a passionate, innovative, and technically skilled software developer with extensive experience in web development. My enthusiasm for technology and programming is infectious, and I'm always looking for ways to take on new challenges and learn new things.
        </p>
      </h1>
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
      img: '/airIotImg.png',
      imgAlt: 'AirIot project Preview',
      title: ' Control non iot devices with air quality data ',
      desc: 'Manipulation of non iot-devices through air quality data with custom triggers to turn smart plugs on/off, to automate things like a Greenhouse or your home swamp cooler.',
      techStack: ['Next.js'],
    },
    {
      name: 'AirFree',
      icon: AiFillGithub,
      url: 'https://www.linkedin.com/in/lovesworking/',
      img: '/airfree.gif',
      imgAlt: 'Air-Free project Image',
      title: 'Global air quality interactive map highlighting air quality in your local area',
      desc: 'An Open Source global map to track air quality data around the world in real time while also keeping historical data backed up to allow easy comparing of air quality in your area ',
      techStack: ['Next.js', 'D3.js', 'GraphQL'],
    },
    {
      name: 'Panoptic',
      icon: AiFillGithub,
      url: 'https://www.linkedin.com/in/lovesworking/',
      img: '/panoptic.png',
      imgAlt: 'AirIot project Image',
      title: 'open-source optimization tool for developing web apps  ',
      desc: 'Panoptic is an open source tool for running technical website audits after code changes to ensure best practices and to make sure site performance has not regressed.',
      techStack: ['Next.js', 'Chart.js', 'Lighthouse'],
    },
    {
      name: 'NextJS-Tailwind Portfolio',
      icon: AiFillGithub,
      url: 'https://github.com/LovesWorking/NextTailwindPortfolio',
      img: '/gifPort.gif',
      imgAlt: 'Portfolio Website Image',
      title: 'Open Source Portfolio Website',
      desc: 'A Portfolio Website that you can make your own just by editing one file! This makes it easy to use for anyone.',
      techStack: ['Next.js', 'Chart.js', 'Lighthouse'],
    },
  ],
};
export default personInfo;
