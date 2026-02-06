import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {motion} from "motion/react";

const Index = () => {
  
  React.useEffect(() => {
    const path = window.location.pathname;

    if (path ) {
      setIsLanguageActive(path);
    }
    if (path === "/exfm") {
      setIsLanguageActive("/exfm-ro");
    }
    if (path === "/exfm-ru") {
      setIsLanguageActive("/exfm-ru");
    }
    if (path === "/exfm-en") {
      setIsLanguageActive("/exfm-en");
    }
  }, []);
  
  const [isActiveButton, setIsActiveButton] = React.useState(false);
  const [isLanguageActive, setIsLanguageActive] = React.useState("");

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
          isActiveButton
            ? styles.header__drop_lang__span
            : "border-0"
        }`}
      >
        {isLanguageActive.slice(6, 8)}
      </span>
      {isActiveButton ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onChange={(e) => e.stopPropagation()}
          className={styles.header__drop_lang}
        >
          <Link
            href={
              isLanguageActive === "/exfm-ro"
                ? "/exfm-ru"
                : isLanguageActive === "/exfm"
                ? "/exfm-en"
                : "/exfm"
            }
            className={styles.header__drop_lang__link}
          >
            {isLanguageActive === "/exfm-ro" && "ru"}
            {isLanguageActive === "/exfm-ru" && "ro"}
            {isLanguageActive === "/exfm-en" && "ro"}
          </Link>
          <Link
            href={
              isLanguageActive === "/exfm-ro"
                ? "/exfm-en"
                : isLanguageActive === "/exfm-ru"
                ? "/exfm-en"
                : "/exfm-ru"
            }
            className={styles.header__drop_lang__link_2}
          >
            {isLanguageActive === "/exfm-ro" && "en"}
            {isLanguageActive === "/exfm-ru" && "en"}
            {isLanguageActive === "/exfm-en" && "ru"}
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </motion.button>
  );
};

export default Index;
