import React from "react";
import { motion } from "motion/react";
import styles from "./styles.module.scss";

const Index = ({ handleLogoClick }) => {
  return (
    <div className={styles.logo} onClick={handleLogoClick}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        src="/shared/Avenew-botanica-logo.png"
        alt="logo"
        className="w-full h-full"
      />
    </div>
  );
};

export default Index;
