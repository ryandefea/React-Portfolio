import React from 'react'
import './portfolio.css'
import Roboger from '../../assets/roboger.jpg'

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
            <h3>Mr. Robogers' Neighborhood</h3>
            <img src={Roboger} alt="roboger" />
            <div className="portfolio__project-cta">
            <a href="https://github.com/ryandefea/Mr.-Robogers-Neighborhood" className="btn" target="_blank">Github</a>
            <a href="https://github.com/ryandefea/Mr.-Robogers-Neighborhood" className="btn" target="_blank">Live Site</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio