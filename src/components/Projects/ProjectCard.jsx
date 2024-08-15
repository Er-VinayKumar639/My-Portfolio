import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
export const ProjectCard = ({
  projects: { title, imageSrc, description, skills, sourceCode },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills &&
            skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
        </ul>
        <div className={styles.sourceCode}>
          <a href={sourceCode} className={styles.sourceCodeLink}>
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
