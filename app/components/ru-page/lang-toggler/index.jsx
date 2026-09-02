import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "motion/react";
import { track } from "../../../../lib/track";

const Index = () => {
  return (
    <Link
    href={"/"}
      className={styles.header_navigate__lang}
      onClick={() => track("lang_switched", { to: "ro" })}
    >
      ro
    </Link>
  );
};

export default Index;
