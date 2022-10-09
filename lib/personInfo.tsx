import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiFilePaperLine } from 'react-icons/ri';
import { Component, ReactElement } from 'react';

// The portfolio webpage pulls from this person object.
// This is the only file you need to edit.

interface PersonObject {
  name: { fName: string; lName: string };
  tabs: { icon: ReactElement; label: string; url: string }[];
  whoIAmTypeWritter: { whoIAm: string[] };
  introduceMyself: { me: ReactElement };
}
const personInfo: PersonObject = {
  name: {
    fName: 'Austin',
    lName: 'Johnson',
  },
  tabs: [
    { icon: <AiOutlineHome key={'home'} size={'32'} />, label: 'Home', url: '/home' },
    { icon: <MdPersonOutline key={'about'} size={'32'} />, label: 'About', url: '/about' },
    {
      icon: <HiOutlineLightBulb key={'projects'} size={'32'} />,
      label: 'Projects',
      url: '/projects',
    },
    {
      icon: <RiFilePaperLine key={'resume'} size={'32'} />,
      label: 'Resume',
      url: '/resume',
    },
  ],
  whoIAmTypeWritter: {
    whoIAm: [
      'MERN Stack Developer',
      'HTML, CSS, JavaScript',
      'NodeJS, ExpressJS',
      'ReactJS, NextJS',
    ],
  },
  introduceMyself: {
    me: (
      <div className='text-white text-2xl'>
        <p className='mt-3 '>
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
      </div>
    ),
  },
};
export default personInfo;
