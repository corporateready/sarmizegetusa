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
    if (path === "/") {
      setIsLanguageActive("/ro");
    }
    if (path === "/ru") {
      setIsLanguageActive("/ru");
    }
    if (path === "/en") {
      setIsLanguageActive("/en");
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
        {isLanguageActive.slice(1, 3)}
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
              isLanguageActive === "/ro"
                ? "/ru"
                : isLanguageActive === "/"
                ? "/en"
                : "/"
            }
            className={styles.header__drop_lang__link}
          >
            {isLanguageActive === "/ro" && "ru"}
            {isLanguageActive === "/ru" && "ro"}
            {isLanguageActive === "/en" && "ro"}
          </Link>
          <Link
            href={
              isLanguageActive === "/ro"
                ? "/en"
                : isLanguageActive === "/ru"
                ? "/en"
                : "/ru"
            }
            className={styles.header__drop_lang__link_2}
          >
            {isLanguageActive === "/ro" && "en"}
            {isLanguageActive === "/ru" && "en"}
            {isLanguageActive === "/en" && "ru"}
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </motion.button>
  );
};

export default Index;
