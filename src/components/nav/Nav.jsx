import React from "react";
import "./nav.css";
import { useRef } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiThink } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";
import { FcServices } from "react-icons/fc";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import RD from "../../assets/RD.svg";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="newHeader">
      <img className="logo" src={RD} alt="rd" />
      <nav ref={navRef}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Nav;

//original navbar

// import React from 'react';
// import './nav.css';
// import {AiOutlineHome} from 'react-icons/ai';
// import {GiThink} from 'react-icons/gi';
// import {SiFuturelearn} from 'react-icons/si';
// import {FcServices} from 'react-icons/fc';
// import {AiFillPhone} from 'react-icons/ai';
// import {useState} from 'react';

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiThink/></a>
//       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><SiFuturelearn/></a>
//       <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcServices/></a>
//       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ===  '#contact' ? 'active' : ''}><AiFillPhone/></a>
//     </nav>
//   )
// }

// export default Nav;
