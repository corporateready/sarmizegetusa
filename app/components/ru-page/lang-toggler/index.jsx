import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "motion/react";

const Index = () => {
  const [isActiveButton, setIsActiveButton] = React.useState(false);
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      type="button"
      className={
        !isActiveButton
          ? styles.header_navigate__lang
          : styles.header_navigate__lang_active
      }
      onClick={() => setIsActiveButton(!isActiveButton)}
    >
      <span
        className={`${styles.header__drop_lang__span_initial} ${
          isActiveButton ? styles.header__drop_lang__span : "border-0"
        }`}
      >
        ru
      </span>
      {isActiveButton ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onChange={(e) => e.stopPropagation()}
          className={styles.header__drop_lang}
        >
          <Link href={"/"} className={styles.header__drop_lang__link}>ro</Link>
        </motion.div>
      ) : (
        ""
      )}
    </motion.button>
  );
};

export default Index;
