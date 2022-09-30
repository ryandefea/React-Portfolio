import React from 'react';
import './about.css';
import RYAN from '../../assets/Ryan.JPG';
import Resume from '../../assets/Ryan DeFea- Resume.pdf'

const About = () => {
  return (
    <section id='about'>
      <div className="about__text">
      <h3>Hello World,</h3>
      <h1>I am Ryan DeFea</h1>
      <h2>Web Developer</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={RYAN} alt="ryan" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod eos architecto reprehenderit molestias, harum saepe laudantium nam. Possimus maxime error optio placeat consectetur rem temporibus dignissimos perferendis iste eius?
          </p>
          <a href={Resume} download className='btn'>Download Resume</a>
          </div>
        </div>
      </div>
      </section>
  )
}

export default About;