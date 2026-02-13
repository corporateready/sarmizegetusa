"use client";
import React from "react";
import styles from "./header.module.scss";
import LangToggler from "../lang-thanks-toggler";
import PhoneButton from "../phone-button-thanks";

const Index = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.navigate}>
            <LangToggler borderColor="#22333F" />
            <PhoneButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
