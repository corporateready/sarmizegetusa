import React from 'react';
import styles from "./styles.module.scss";

const Index = () => {

  return (
    <a
      href="#header"
      className={styles.letter__button_up}
      rel="noopener noreferrer"
      aria-label="back to start web-site">
      <svg
        className={styles.letter__button_up_icon}
        viewBox="0 0 9 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.39844 15.9V0.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5 3.8L4.4 0.5L8.3 3.8"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default Index