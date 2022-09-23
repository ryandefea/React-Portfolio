import React from 'react';
import './header.css';
import  HeaderSocials from './HeaderSocials';
import CTA from './CTA';
import RYAN from '../../assets/RYAN.JPG'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World,</h5>
        <h1>I am Ryan DeFea</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials /> 

        <div className="ryan">
          <img src={RYAN} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header> 
  )
}

export default Header;