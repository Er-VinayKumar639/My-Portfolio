import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    
    const interval = setInterval(handleNext, 10000); // Auto-slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main} id="projects">
    <section className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.slider}>
      <div
        className={styles.sliderWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {projects.map((project, id) => (
          <div key={id} className={styles.cardWrapper}>
            <ProjectCard projects={project} />
          </div>
        ))}
      </div>
    </div>
    <div className={styles.controls}>
      <button className={styles.controlButton} onClick={handlePrev}>
        &#8249;
      </button>
      <button className={styles.controlButton} onClick={handleNext}>
        &#8250;
      </button>
    </div>
  </section>
  </div>
  );
};
