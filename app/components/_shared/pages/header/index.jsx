"use client";
import React from "react";
import styles from "./styles.module.scss";
import LangToggler from "../../../ui/lang-toggler";
import PhoneButton from "../../../ui/phone-button";
import HeaderLogo from "../../../ui/header-logo";

const Index = () => {
  return (
    <header className={styles.header} id="header" role="banner">
      <div className={styles.container}>
        <div className={styles.inner}>
          <HeaderLogo />

          <div className={styles.navigate}>
            <LangToggler />

            <PhoneButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
