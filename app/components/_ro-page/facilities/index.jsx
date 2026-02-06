import React from "react";
import styles from "./facilities.module.scss";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.facilities}>
      <p className={styles.facilities__title}>
        Facilități care {""}
        <br className="block sm:hidden" /> transformă {""}
        <br className="hidden sm:block" /> confortul {""}
        <br className="block sm:hidden" /> în stil de viață
      </p>
      <div className={styles.facilities__inner}>
        <div className={styles.facilities__item}>
          <Image
            src="/shared/facilities-item-1.avif"
            alt="Hero"
            width={420}
            height={368}
            quality={85}
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
          ></Image>
          <span className={styles.facilities__item__title}>
            Terenuri de joacă {""}
            <br className="" /> pentru toate {""}
            <br className="hidden sm:block" />
            vârstele
          </span>
        </div>    
        <div className={styles.facilities__item}>
          <Image
            src="/shared/facilities-item-2.avif"
            alt="Hero"
            width={420}
            height={368}
            quality={85}
            className={styles.facilities__item}
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
          />
          <span className={styles.facilities__item__title}>
            Locuri de parcări subterane {""}
            <br className="block sm:hidden" /> suficiente pentru fiecare {""}
            <br className="block sm:hidden" /> locatar
          </span>
        </div>
        <div className={styles.facilities__item}>
          <Image
            src="/shared/facilities-item-3.avif"
            alt="Hero"
            width={420}
            height={368}
            quality={85}
            className={styles.facilities__item}
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
          />
          <span className={styles.facilities__item__title}>
            Școală și grădiniță {""}
            <br className="" /> în incinta {""}
            <br className="hidden sm:block" /> complexului
          </span>
        </div>
        <div className={styles.facilities__item}>
          <Image
            src="/shared/facilities-item-4.avif"
            alt="Hero"
            width={420}
            height={368}
            quality={85}
            className={styles.facilities__item}
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, 33vw"
          />
          <span className={styles.facilities__item__title}>
            Art & Lounge exterior pentru {""}
            <br className="block sm:hidden" /> adulți {""}{" "}
            <br className="hidden sm:block" /> cu BBQ și WiFi
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
