import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
function About() {
  return (
    <div className={styles.main}  id="about">
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className= {styles.aboutItems}>
          <div className={styles.aboutHead}> 
            Seeking job opportunity as a Software Engineer at a reputable company to utilize my skills and
            knowledge in the field of software development and to work in a challenging environment to achieve the
            corporate goals.
          </div>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Software Developer</h3>
              <p>Looking for Software Developer positions. Specialized in creating responsive, scalable and user-friendly softwares.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Experienced in building responsive and user-friendly websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Software Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
                <p>Proficient in building scalable,fast and optimised back-end systems and secure APIs.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export { About };