"use client";
import React from "react";
import styles from "./header.module.scss";
// import LangToggler from "../lang-toggler";
import PhoneButton from "../phone-button-thanks";
// import {useRouter} from "next/navigation";

const Index = () => {
  // const router = useRouter();

  // const handleLogoClick = () => {
  //   router.back()
  // }

  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.navigate}>
            {/* <LangToggler borderColor="#22333F" /> */}
            <PhoneButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
