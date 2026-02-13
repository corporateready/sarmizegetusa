"use client";
import React from "react";
import styles from "./header.module.scss";
import HeaderLogo from "../../../ui/header-logo";
import LangToggler from "../../../ui/lang-toggler-thanks-pages";
import PhoneButton from "../../../ui/phone-button-thanks-pages";

const Index = () => {

  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <HeaderLogo
              widthMobile="130rem"
              heightMobile="27rem"
              widthDesktop="212rem"
              heightDesktop="44rem"
            />
          </div>
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
