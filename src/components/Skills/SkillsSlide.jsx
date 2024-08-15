
import React, { useState, useRef } from 'react';
import styles from "./SkillsSlider.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const SkillsSlider = () => {
  return (
    <div className={styles.main} id="skills">
    <section className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.images}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.imgSlide}>
              <div className={styles.imgBox}>
                <img className={styles.img} src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                <p>{skill.title}</p>
              </div>
      
            </div>
          );
        })}
      </div>
      <div>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
};
