import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinay Kumar</h1>
        <p className={styles.description}>
          Pursuing my B.Tech in Computer Science and Engineering from Babu
          Banarasi Das University. I am an enthusiastic, adaptable, and confident individual,
          passionate about utilizing my skills and strengths to contribute to the success of organizations.
          My goal is to become a Software Engineer, and I am actively working towards it. 
          I have experience in programming languages such as Java, C, Python, JavaScript, and currently learning GoLang. 
          as well as in Full Stack Web Development.
        </p>
        <a href="mailto:er.vinaykumar2003@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/MyIMG1.png")} alt="Hero-Image" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export {Hero};


