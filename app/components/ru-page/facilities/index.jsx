import React from "react";
import styles from "./facilities.module.scss";
import { motion } from "motion/react";
import { useSectionViewed } from "../../../../lib/useSectionViewed";

const Index = () => {
  const sectionRef = useSectionViewed("facilities");

  return (
    <div className={styles.facilities} ref={sectionRef}>
      <h6 className={styles.facilities__title}>
        Удобства, которые {""}
        <br className="inline-block sm:hidden" />превращают 
        <br className="hidden sm:inline-block" />комфорт {""}
        <br className="inline-block sm:hidden" />в стиль жизни
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
            Игровые площадки 
            <br />для всех возрастов
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
            Школа и детский {""}
            <br className="hidden sm:inline-block" />сад на {""}
            <br className="inline-block sm:hidden" />территории {""}
            <br className="hidden sm:inline-block" />комплекса
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
            Подземный паркинг
            <br />для каждого жильца
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
