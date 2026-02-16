"use client";
import React from "react";
import Hero from "../components/ru-page/hero";
import Letter from "../components/ru-page/letter";
import Footer from "../components/ru-page/footer";
import HeroForm from "../components/ru-page/hero-form";
import HeroFormBottom from "../components/ru-page/hero-form-bottom";
import styles from "./styles.module.scss"
import { motion } from "motion/react";
import {usePathname} from "next/navigation";

export default function Home() {
  const path = usePathname();
  
  // const [isHome, setIsHome] = React.useState(false);
  // React.useEffect(() => {
  //   if (path === "/") {
  //     setIsHome(true);
  //   }
    
  // }, [path]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenBottom, setIsOpenBottom] = React.useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleModalBottom = () => {
    setIsOpenBottom(!isOpenBottom);
  };

  React.useEffect(() => {
    if (isOpen || isOpenBottom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isOpenBottom]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.exfm_wrapper}
    >
      <Hero handleToggle={handleToggleModal} />
      <Letter handleToggleModalBottom={handleToggleModalBottom} />
      <Footer />
      {isOpen && <HeroForm handleToggleModal={handleToggleModal} />}
      {isOpenBottom && (
        <HeroFormBottom handleToggleModalBottom={handleToggleModalBottom} />
      )}
    </motion.div>
  );
}