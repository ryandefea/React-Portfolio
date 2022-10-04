import React from "react";
import "./about.css";
import RYAN from "../../assets/Ryan.JPG";
import RYANEW from "../../assets/Ryan-nobackground.jpg";
import Resume from "../../assets/Ryan DeFea- Resume.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="about__text">
        <h3>Hello World,</h3>
        <h1>I am Ryan DeFea</h1>
        <h2>Web Developer</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={RYANEW} alt="ryan" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <p>
              I am a recent graduate of the coding bootcamp Epicodus. During my
              6 months of learning at Epicodus I was able to discover and
              improve my skills as a fullstack developer. While at Epicodus I
              was fully immersed in the world of programming and some pretty
              cool people along the way.
              <br />
              <br />
              Previously I was a public school teacher for 5 years. Mostly
              teaching 6th grade earth & space science. I discovered programming
              earlier this year and haven't looked back since. Making things on
              the internet is fun.
              <br />
              <br />I am currently located in Aberdeen, SD which is in the
              western northeast part of South Dakota. But I am open to
              relocation through employment. I live in Aberdeen with my wife and
              our two cats "Moe Moe" & "Pierogi". In my free time I enjoy
              gaming, cooking, lifting weights, binge watching Youtube, and
              rewatching episodes of the Sopranos.
            </p>
            <a href={Resume} download className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
