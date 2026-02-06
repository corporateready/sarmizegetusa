import React from "react";
import styles from "./button.module.scss";

function Index({ formSubmitTrack, textButton, isDisabled }) {
  return (
    <button className={styles.button} onClick={formSubmitTrack} disabled={!isDisabled}>
      {textButton}
    </button>
  );
}

export default Index;
