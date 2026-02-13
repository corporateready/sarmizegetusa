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
      <img
        src="/shared/Avenew-botanica-logo.png"
        className={styles.letter__logo}
        alt="Avenew botanica logo"
      />
      <p className={styles.letter__title}>Reserve Your Spot Now</p>
      <p className={styles.letter__description}>
        Request details of the exclusive investor offer. {""}
        <br />
        Limited spots available at the pre-sale stage — {""}
        <br />a unique opportunity available only {""}
        <br className="block xl:hidden" />
        to a select {""} <br className="hidden xl:block" /> number of investors
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Get priority access</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>
      <p className={styles.oferta__text}>
        Offer valid until <span>15.11.2025</span>
      </p>
    </motion.div>
  );
};

export default Index;
