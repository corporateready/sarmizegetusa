import React from "react";
import styles from "./facilities.module.scss";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <h6 className={styles.facilities__title}>
        Facilități care {""}
        <br className="block sm:hidden" /> transformă {""}
        <br className="hidden sm:block" /> confortul {""}
        <br className="block sm:hidden" /> în stil de viață
      </h6>
      <div className={styles.facilities__inner}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.facilities__item}
        >
          <span className={styles.facilities__item__title}>
            Terenuri de joacă {""}
            <br className="" /> pentru toate {""}
            <br className="hidden sm:block" />
            vârstele
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.facilities__item_2}
        >
          <span className={styles.facilities__item__title}>
            Școală și grădiniță {""}
            <br className="" /> în incinta {""}
            <br className="hidden sm:block" /> complexului
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.facilities__item_3}
        >
          <span className={styles.facilities__item__title}>
            Locuri de parcări subterane {""}
            <br className="block sm:hidden" /> suficiente pentru fiecare {""}
            <br className="block sm:hidden" /> locatar
          </span>
        </motion.div>
        <motion.div className={styles.facilities__item_4}>
          <span className={styles.facilities__item__title}>
            Art&Lounge exterior pentru {""}
            <br className="block sm:hidden" /> adulți {""}{" "}
            <br className="hidden sm:block" /> cu BBQ și WiFi
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
