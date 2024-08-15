import styles from './App.module.css'
import React from 'react'
import {Navbar} from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {About} from './components/About/About';
import {Experience} from './components/Experience/Experience';
import {Projects} from './components/Projects/Projects';
import {Contact} from './components/Contact/Contact';
import {SkillsSlider} from './components/Skills/SkillsSlide';
import {Certifications} from './components/Certifications/Certifications';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <SkillsSlider/>
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
