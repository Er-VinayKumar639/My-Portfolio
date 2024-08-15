import React from "react";
import styles from "./CertificationCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificationCard = ({
  certificates: { title, imageSrc, description, skills, credentials },
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
        <div className={styles.credentials}>
          <a href={credentials} className={styles.credentialsLink}>
            View Credentials
          </a>
        </div>
      </div>
    </div>
  );
};
