
"use client";
import React from "react";
import Header from "../components/header-thanks";
import Footer from "../components/footer-thanks";
import styles from "../thanks.module.scss";
import { motion } from "motion/react";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.thanks_overflow}
    >
      <div className={styles.thanks}>
        <Header />

        <div className="w-full h-full flex flex-col ">
          <div className="px-60 sm:px-0 w-full sm:w-5256 h-full mx-auto">
            <h2 className="w-full text-[40rem] sm:text-[78rem] text-white font-medium leading-[100%] mt-[20dvh] sm:mt-[44.3dvh] text-center sm:text-left">
              Mulțumim!
            </h2>
            <p className="text-[26rem] sm:text-[30rem] text-[#86878B] font-normal leading-[120%] sm:leading-180 mt-[3dvh] sm:mt-[4vh] text-center sm:text-left">
              Solicitarea ta a fost {""}
              <br className="block sm:hidden" /> înregistrată cu succes. {""}
              <span className="block mt-[2.2vh] sm:mt-0">
                În cel mai scurt timp, managerul revine cu un apel pentru {""}
                <br className="hidden sm:block" />
                a-ți oferi toate detaliile.
              </span>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default page;
