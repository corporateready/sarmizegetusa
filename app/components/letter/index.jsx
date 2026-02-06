import React from "react";
import styles from "./letter.module.scss";
import { motion, useInView } from "motion/react";

const Index = ({ handleToggleModalBottom }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.letter}
    >
      <p className={styles.letter__title}>
        Descoperă
        <br />
        opțiunile de achiziție
      </p>
      <p className={styles.letter__description}>
        Află primele detalii despre proiect {""}
        <br className={styles.span__break_large} /> și condițiile {""}
        <br className={styles.span__break2_large}/>
        de plată disponibile {""}
        <br className={styles.span__break3_large} />la startul vânzărilor
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Solicită oferta personalizată</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>
    </motion.div>
  );
};

export default Index;
