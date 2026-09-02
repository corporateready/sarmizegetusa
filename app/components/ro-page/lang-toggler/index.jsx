import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { track } from "../../../../lib/track";

const Index = () => {
  return (
    <Link
    href={"/ru"}
      className={styles.header_navigate__lang}
      onClick={() => track("lang_switched", { to: "ru" })}
    >
        ru
    </Link>
  );
};

export default Index;
