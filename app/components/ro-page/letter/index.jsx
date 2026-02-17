"use client";
import React from "react";
import styles from "./letter.module.scss";
import { motion } from "motion/react";

const Index = ({ handleToggleModalBottom }) => {

  return (
    <motion.div
      className={styles.letter}
    >
      <span className={styles.letter__body}></span>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.letter__inner}
      >
        <motion.p
          initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
          className={styles.letter__title}
        >
          Descoperă
          <br />
          opțiunile de achiziție
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
          className={styles.letter__description}
        >
          Află primele detalii despre proiect {""}
          <br className={styles.span__break_large} /> și condițiile {""}
          <br className={styles.span__break2_large} />
          de plată disponibile {""}
          <br className={styles.span__break3_large} />
          la startul vânzărilor
        </motion.p>
      </motion.div>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Solicită oferta personalizată</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>
      <span className={styles.letter__front} />
    </motion.div>
  );
};

export default Index;
