import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {motion} from "motion/react";

const Index = () => {
  const [isActiveButton, setIsActiveButton] = React.useState(false);
  return (
    <Link
    href={"/thank-you-ru"}
      type="button"
      className={styles.header_navigate__lang}
    >
     ru
    </Link>
  );
};

export default Index;
