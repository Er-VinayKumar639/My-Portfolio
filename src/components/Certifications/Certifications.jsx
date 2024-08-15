import React, { useState, useEffect } from "react";
import styles from "./Certifications.module.css";
import certificates from "../../data/certificates.json";
import { CertificationCard } from "./CertificationCard";

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}  id="certifications">
    <section className={styles.container}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.slider}>
        <div
          className={styles.sliderWrapper}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {certificates.map((certificate, id) => (
            <div key={id} className={styles.cardWrapper}>
              <CertificationCard certificates={certificate} />
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
