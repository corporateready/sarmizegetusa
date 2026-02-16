import React from "react";
import styles from "./styles.module.scss";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className={styles.hero__form_progress__wrapper}>
      <motion.span
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className={styles.progressLine}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1 }}
        className="text-[8rem] text-white font-semibold absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 z-10"
      >
        50%
      </motion.span>
    </div>
  );
};

export default Index;
