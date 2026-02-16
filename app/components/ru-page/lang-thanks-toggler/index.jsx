import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Index = () => {
  return (
    <Link
      href={"/thank-you-ro"}
      className={styles.header_navigate__lang}
    >
     ro
    </Link>
  );
};

export default Index;
