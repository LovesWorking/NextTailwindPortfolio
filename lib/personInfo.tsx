import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { RiFilePaperLine } from 'react-icons/ri';
import { ReactElement } from 'react';

// The whole webpage pulls from this person object.
// This is the only file you need to edit.

interface PersonObject {
  name: { fName: string; lName: string };
  tabs: { icon: ReactElement; label: string; url: string }[];
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
      label: 'projects',
      url: '/projects',
    },
    {
      icon: <RiFilePaperLine key={'resume'} size={'32'} />,
      label: 'Resume',
      url: '/resume',
    },
  ],
};
export default personInfo;
