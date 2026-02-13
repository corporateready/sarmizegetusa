import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {motion} from "motion/react";

const Index = ({ borderColor }) => {
  React.useEffect(() => {
    const path = window.location.pathname;

    if (path) {
      setIsLanguageActive(path);
    }
    if (path === "/thank-you-ro") {
      setIsLanguageActive("/thank-you-ro");
    }
    if (path === "/thank-you-ru") {
      setIsLanguageActive("/thank-you-ru");
    }
    if (path === "/thank-you-en") {
      setIsLanguageActive("/thank-you-en");
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
        className={`flex justify-center items-center h-[52rem] w-[52rem] sm:w-[30rem] ${
          isActiveButton
            ? "sm:text-[#22333F] border-b-[0.36rem] sm:border-b-[1rem] border-b-white sm:border-b-[#22333F] w-[52rem] sm:w-[30rem] h-[52rem] sm:h-[42rem]"
            : "border-0"
        }`}
      >
        {isLanguageActive.slice(11, 13)}
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
              isLanguageActive === "/thank-you-ro"
                ? "/thank-you-ru"
                : isLanguageActive === "/thank-you-ru"
                ? "/thank-you-en"
                : "/thank-you-ro"
            }
            className="flex justify-center items-center border-b-[0.36rem] sm:border-b-[1rem] border-b-white sm:border-b-[#22333F] w-[52rem] h-[52rem] sm:w-[30rem] sm:h-[40rem] absolute top-[4rem] left-1/2 -translate-x-1/2 z-[2]"
          >
            {isLanguageActive === "/thank-you-ro" && "ru"}
            {isLanguageActive === "/thank-you-ru" && "ro"}
            {isLanguageActive === "/thank-you-en" && "ro"}
          </Link>
          <Link
            href={
              isLanguageActive === "/thank-you-ro"
                ? "/thank-you-en"
                : isLanguageActive === "/thank-you-ru"
                ? "/thank-you-en"
                : "/thank-you-ru"
            }
            className="flex justify-center items-center absolute top-[52rem] sm:top-[44rem] left-1/2 -translate-x-1/2 z-[2] w-[52rem] h-[52rem] sm:w-[30rem] sm:h-[44rem]"
          >
            {isLanguageActive === "/thank-you-ro" && "en"}
            {isLanguageActive === "/thank-you-ru" && "en"}
            {isLanguageActive === "/thank-you-en" && "ru"}
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </motion.button>
  );
};

export default Index;
