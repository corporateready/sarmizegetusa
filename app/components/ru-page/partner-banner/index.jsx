"use client";
import React from "react";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <section className={styles.partner}>
      <a
        href="https://avalonfinance.md/solutii/prima-cheie/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Prima Cheie — узнай варианты финансирования на avalonfinance.md"
        className={styles.partner__card}
      >
        <div className={styles.partner__heading}>
          <img
            src="/prima-cheie-logo.svg"
            alt="Prima Cheie"
            className={styles.partner__logo}
          />
          <p className={styles.partner__title}>
            Нашёл подходящую квартиру?
          </p>
        </div>

        <div className={styles.partner__text}>
          <p className={styles.partner__desc}>
            Узнай варианты финансирования через Prima Cheie.
          </p>
          <p className={styles.partner__detail}>
            Подробности — на сайте Avalon Finance.
          </p>
        </div>

        <span className={styles.partner__btn}>
          Узнать больше на avalonfinance.md&nbsp;→
        </span>
      </a>
    </section>
  );
};

export default Index;
