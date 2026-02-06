"use client";
import React from "react";
import styles from "./styles.module.scss";
import LangToggler from "../../ui/lang-toggler";
import PhoneButton from "../../ui/phone-button";
import HeaderLogo from "../../ui/header-logo";

const Index = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <HeaderLogo
            widthMobile="130rem"
            heightMobile="27rem"
            widthDesktop="212rem"
            heightDesktop="44rem"
          />

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
