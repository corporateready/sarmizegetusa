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
      <p className={styles.letter__title}>
        Забронируй своё {""}
        <br />
        место прямо сейчас
      </p>
      <p className={styles.letter__description}>
        Запроси детали эксклюзивного предложения для инвесторов. {""}
        <br />
        Ограниченное количество мест на этапе pre-sale — {""}
        <br />
        уникальная возможность, доступная только {""}
        <br />
        ограниченному числу инвесторов
      </p>
      <button
        className={styles.letter__button_access}
        onClick={handleToggleModalBottom}
      >
        <span>Получить приоритетный доступ</span>
        <span className={styles.button__detail_sparkle_left}></span>
        <span className={styles.button__detail_sparkle_right}></span>
      </button>
      <p className={styles.oferta__text}>
        Предложение действительно <span>до 15.11.2025</span>
      </p>
    </motion.div>
  );
};

export default Index;
