import React from 'react';
import './experience.css';
import {DiBootstrap} from 'react-icons/di';
import {SiCsharp} from 'react-icons/si';
import {DiCss3} from 'react-icons/di';
import {DiHtml5} from 'react-icons/di';
import {DiJsBadge} from 'react-icons/di';
import {DiMysql} from 'react-icons/di';
import {DiPython} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {DiNodejs} from 'react-icons/di';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have Learned</h5>
      <h2>Programming Languages</h2>
      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <DiBootstrap size={"3.5em"} />
          </article>
          <article className="experience__details">
            <SiCsharp size={"3em"} />
          </article>
          <article className="experience__details">
            <DiCss3 size={"3em"} />
          </article>
          <article className="experience__details">
            <DiHtml5 size={"3em"} />
          </article>
          <article className="experience__details">
            <DiJsBadge size={"3em"} />
          </article>
          <article className="experience__details">
            <DiMysql size={"3em"} />
          </article>
          <article className="experience__details">
            <DiPython size={"3em"} />
          </article>
          <article className="experience__details">
            <DiReact size={"3em"} />
          </article>
          <article className="experience__details">
            <DiNodejs size={"3em"} />
          </article>
        </div>
      </div>

    
    </section>
  )
}

export default Experience;