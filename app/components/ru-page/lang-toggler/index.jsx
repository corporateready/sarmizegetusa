import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "motion/react";

const Index = () => {
  return (
    <Link
    href={"/"}
      className={styles.header_navigate__lang}
    >
      ro
    </Link>
  );
};

export default Index;
