"use client";
import React from "react";
import styles from "./styles.module.scss";
import LangToggler from "../lang-toggler";
import PhoneButton from "../phone-button";

const Index = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.navigate}>
            {/* <LangToggler /> */}
            <PhoneButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
