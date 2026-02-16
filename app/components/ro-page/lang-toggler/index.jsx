import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Index = () => {
  return (
    <Link
    href={"/ru"}
      className={styles.header_navigate__lang}
    >
        ru
    </Link>
  );
};

export default Index;
