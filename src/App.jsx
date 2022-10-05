import React from 'react';
import Nav from './components/nav/Nav';
import HeaderSocials from './components/header/HeaderSocials';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <About />
      <Experience />
      {/* <HeaderSocials /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App