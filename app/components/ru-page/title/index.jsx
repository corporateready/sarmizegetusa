import React from 'react'
import styles from "./styles.module.scss";
import { motion } from "motion/react";

const Index = ({ textTitle }) => {
  return (
    <motion.h1
    className={styles.title}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      {textTitle}
    </motion.h1>
  );
}

export default Index