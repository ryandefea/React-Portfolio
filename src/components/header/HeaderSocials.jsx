import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsController} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ryan-defea/" target=" _blank"><BsLinkedin/></a>
      <a href="https://github.com/ryandefea" target=" _blank"><BsGithub/></a>
      <a href="https://cod.tracker.gg/warzone/profile/atvi/flyinryan_d%237360883/overview?mode=br" target=" _blank"><BsController/></a>

    </div>
  )
}

export default HeaderSocials