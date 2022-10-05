import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsController} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>Ryan</a> */}

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__links">
      <a href="https://www.linkedin.com/in/ryan-defea/" target=" _blank"><BsLinkedin/></a>
      <a href="https://github.com/ryandefea" target=" _blank"><BsGithub/></a>
      <a href="https://cod.tracker.gg/warzone/profile/atvi/flyinryan_d%237360883/overview?mode=br" target=" _blank"><BsController/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Ryan DeFea. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;