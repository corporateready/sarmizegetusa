"use client";
import React from "react";
import styles from "./hero.module.scss";
import Facilities from "../facilities";
import Title from "../../title";
import HeartAnimate from "../../heart-animate";
import Header from "../../shared/pages/header";
import Image from "next/image";

const Hero = ({ handleToggle }) => {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero}>
        <Image
          src="/exfm/hero-light-bg-mobile.avif"
          alt="Avenew Botanica hero background"
          fill
          priority={true}
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1919px) 90vw, 1200px"
          quality={85}
          className={styles.hero__bg_mobile}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/exfm/hero-light-bg-desktop.avif"
          alt="Avenew Botanica laptop background"
          fill
          priority={true}
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1919px) 90vw, 1200px"
          quality={85}
          className={styles.hero__bg_desktop}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/exfm/hero-light-bg-large.avif"
          alt="Avenew Botanica large background"
          fill
          priority={true}
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1919px) 90vw, 1200px"
          quality={85}
          className={styles.hero__bg_large}
          style={{ objectFit: "cover" }}
        />
        <Header />
        <div className={styles.hero__dark__building_shadow}></div>
        <HeartAnimate />
        <Title textTitle="coming soon" />
        <p className={styles.hero__text}>
          Ofertă specială {""}
          <br className="inline-block sm:hidden" />
          pentru {""}investitori  {""}
        </p>
        <p className={styles.description}>
          Investește într-un proiect imobiliar nou, {""}
          <br className="block" />
          înainte de startul vânzărilor{" "}
        </p>
        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>Află detalii acum</span>
          <span className={styles.button__detail__line_bottom}></span>
          <span className={styles.button__detail__sparkle}></span>
          <span className={styles.button__detail__sparkle_2}></span>
          <span className={styles.button__detail__sparkle_3}></span>
          <span className={styles.button__detail__sparkle_4}></span>
          <span className={styles.button__detail__sparkle_5}></span>
          <span className={styles.button__detail__sparkle_6}></span>
        </button>
        <p className={styles.location__title_text}>
          Locație fără {""}
          <br className="block sm:hidden" /> precedent {""}
          <br className="hidden sm:block" /> în inima {""}
          <br className="block sm:hidden" /> sectorului Botanica
        </p>
        <p className={styles.location__description_text}>
          În curând, un nou ansamblu rezidențial
          <br className="block" /> care va ridica calitatea {""}
          <br className="hidden sm:block" />
          vieții urbane
        </p>
        <p className={styles.location__title_text__bottom}>
          Un nou standard {""}
          <br className="" /> de trai urban
        </p>
        <p className={styles.location__description_text__bottom}>
          Între două parcuri emblematice
          <br className="" />
          și două scuaruri verzi — unde liniștea
          <br className="" />
          devine parte din viața ta de zi cu zi
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
