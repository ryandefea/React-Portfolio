import React from 'react';
import './header.css';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h5>Hello World,</h5>
        <h1>I am Ryan DeFea</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <CTA />
      </div>
    </header> 
  )
}

export default Header;