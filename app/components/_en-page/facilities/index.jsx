import React from "react";
import styles from "./facilities.module.scss";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <h6 className={styles.facilities__title}>
        Amenities That {""}
        <br className="inline-block sm:hidden" />
        Transform {""}<br className="hidden sm:inline-block"/>Comfort {""}
        <br className="inline-block sm:hidden" />into Lifestyle
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
            Playgrounds {""}
            <br />
            for all ages
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
            Sufficient underground {""}
            <br />
            parking for each {""} <br className="hidden sm:block" /> resident
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
            On-site school {""}
            <br />
            and kindergarten
          </span>
        </motion.div>

        <motion.div className={styles.facilities__item_4}>
          <span className={styles.facilities__item__title}>
            Outdoor Art&Lounge {""} <br className="hidden sm:block" /> for {""}
            <br className="block sm:hidden" />
            adults with BBQ {""} <br className="hidden sm:block" /> and WiFi
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
