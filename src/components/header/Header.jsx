import React from 'react';
import './header.css';
import  HeaderSocials from './HeaderSocials';
import CTA from './CTA';
import RYAN from '../../assets/RYAN.JPG'

const Header = () => {
  return (
    <header>
         {/* <div className="header__about">  */}
      <div className="container header__container">
        <h5>Hello World</h5>
        <h5>I am Ryan DeFea</h5>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials /> 
        <div className="about__me">
        <div className="ryan">
          <img src={RYAN} alt="me" />
        </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* </div> */}
      </div>
    </header> 
  )
}

export default Header;