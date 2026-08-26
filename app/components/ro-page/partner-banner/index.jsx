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
        aria-label="Prima Cheie — descoperă opțiunile de finanțare pe avalonfinance.md"
        className={styles.partner__card}
      >
        <div className={styles.partner__heading}>
          <img
            src="/prima-cheie-logo.svg"
            alt="Prima Cheie"
            className={styles.partner__logo}
          />
          <p className={styles.partner__title}>
            Ai găsit apartamentul potrivit?
          </p>
        </div>

        <div className={styles.partner__text}>
          <p className={styles.partner__desc}>
            Descoperă opțiunile de finanțare prin Prima Cheie.
          </p>
          <p className={styles.partner__detail}>
            Detalii complete pe site-ul Avalon Finance.
          </p>
        </div>

        <span className={styles.partner__btn}>
          Află mai multe pe avalonfinance.md&nbsp;→
        </span>
      </a>
    </section>
  );
};

export default Index;
