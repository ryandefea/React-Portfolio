import React from 'react';
import './portfolio.css';
import Roboger from '../../assets/roboger.jpg';
import pyong from '../../assets/pyong.jpg';
import Pyong from '../../assets/Pyong.exe';
import Pierre from '../../assets/Pierre.jpg';
import Larry from '../../assets/larry.jpg';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Checkout My Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__project">
          <div className="portfolio__project-image">
            <h3>Mr. Robogers' Neighborhood</h3>
            <img src={Roboger} alt="roboger" />
            <div className="portfolio__project-cta">
            <a href="https://github.com/ryandefea/Mr.-Robogers-Neighborhood" className="btn" target="_blank">Github</a>
            <a href="https://github.com/ryandefea/Mr.-Robogers-Neighborhood" className="btn" target="_blank">Live Site</a>
            </div>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolio__project-image">
            <h3>Pierre's Sweet And Savory Treats</h3>
            <img src={Pierre} alt="pierre" />
            <div className="portfolio__project-cta">
            <a href="https://github.com/ryandefea/Pierre-s-Sweet-and-Savory-Treats" className="btn" target="_blank">Github</a>
            <a href="https://github.com/ryandefea/Pierre-s-Sweet-and-Savory-Treats" className="btn" target="_blank">Live Site</a>
            </div>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolio__project-image">
            <h3>4 Player Pyong</h3>
            <img src={pyong} alt="pyong" />
            <div className="portfolio__project-cta">
            <a href="https://github.com/ryandefea/Pyong-Game" className="btn" target="_blank">Github</a>
            <a href={Pyong} download className="btn">Download</a>
            </div>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolio__project-image">
            <h3>Larry's Gym</h3>
            <img src={Larry} alt="larry" />
            <div className="portfolio__project-cta">
            <a href="https://github.com/ryandefea/Fitness-App" className="btn" target="_blank">Github</a>
            <a href="https://github.com/ryandefea/Fitness-App" className="btn" target="_blank">Live Site</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio