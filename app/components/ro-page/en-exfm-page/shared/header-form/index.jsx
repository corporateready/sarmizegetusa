"use client";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const langs = [
  {
    id: 1,
    name: "ro",
    value: "",
  },
  {
    id: 2,
    name: "ru",
    value: "ru",
  },
  {
    id: 3,
    name: "en",
    value: "en",
  },
];

const Index = () => {
  const [isOpenSelect, setIsOpenSelect] = React.useState(false);
  const [valueSelect, setValueSelect] = React.useState("ro");

  const handleOpenSelect = () => {
    setIsOpenSelect(!isOpenSelect);
    setDisabled(true);
  };

  const handleChangeValueSelect = (value) => {
    setValueSelect(value);
    setIsOpenSelect(false); 
    setDisabled(false);
  };

  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            {/* <img
              src="/shared/Avenew botanica-logo.png"
              alt="logo"
              className="w-full h-full"
            /> */}
          </div>
          <div className={styles.navigate}>
            <button
              className={`${styles.lang__select} ${
                isOpenSelect && styles.lang__select_active
              }`}
              onClick={handleOpenSelect}
            >
              {!isOpenSelect ? valueSelect : ''}
              {isOpenSelect && (
                <div className={`${isOpenSelect && styles.lang__select_list}`}>
                  {langs.map((item) => (
                    <Link
                      href={`/${item.value}`}
                      key={item.id}
                      className={styles.lang__select_list_item}
                      onClick={() => handleChangeValueSelect(item.value)}
                      disabled={disabled === valueSelect}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </button>
            <Link href="/" className={styles.phone__link}>
              + 373 69 786 756
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
