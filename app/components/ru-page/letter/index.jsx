import React from "react";
import styles from "./letter.module.scss";
import { motion } from "motion/react";

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
        Узнай о доступных
        <br />вариантах приобретения
      </p>
      <p className={styles.letter__description}>
        Запроси первичную информацию
        <br />о проекте и условиях оплаты
        <br />на старте продаж
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Получить индивидуальное предложение</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>
    </motion.div>
  );
};

export default Index;
