import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {GiThink} from 'react-icons/gi';
import {SiFuturelearn} from 'react-icons/si';
import {FcServices} from 'react-icons/fc';
import {AiFillPhone} from 'react-icons/ai';
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiThink/></a>
      <a href="#experience"><SiFuturelearn/></a>
      <a href="#services"><FcServices/></a>
      <a href="#contact"><AiFillPhone/></a>
    </nav>
  )
}

export default Nav;