import React from 'react';
import styles from "./styles.module.scss";

const Index = () => {

  return (
    <a
      href="#header"
      className={styles.letter__button_up}
    >
      <svg
        className={styles.letter__button_up_icon}
        viewBox="0 0 27 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 51.8333V0.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5 11.5L13.5 0.5L26.5 11.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default Index