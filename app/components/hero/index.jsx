"use client";
import React from "react";
import styles from "./hero.module.scss";
import Facilities from "../facilities";
import Title from "../title";
import HeartAnimate from "../heart-animate";
import Header from "../header";
import Image from "next/image";

const Hero = ({ handleToggle }) => {
  return (
    <>
    <div className={styles.hero__wrapper}>
      <div className={styles.hero}>
        <div className={styles.bg__light}></div>
        <div className={styles.building__wrapper}>
          <div className={styles.hero__bg_mobile}>
            <Image
              src="/building-mobile.avif"
              alt="sarmizegetusa building"
              fill
              loading="eager"
              sizes="(max-width: 640px) 100vw"
            />
          </div>
          <div className={styles.hero__bg_desktop}>
            <Image
              src="/building-large.avif"
              alt="sarmizegetusa building"
              fill
              loading="eager"
              className="object-cover"
              sizes="(min-width: 640px) 100vw"
            />
          </div>
          <div className={styles.hero__bg_large}>
            <Image
              src="/building-large.avif"
              alt="sarmizegetusa building"
              fill
              loading="eager"
              sizes="(min-width: 640px) 100vw"
            />
          </div>
        </div>
        <Header />
        <Title textTitle="START VÂNZĂRI" />
        <p className={styles.hero__text}>Un nou ansamblu rezidențial</p>
        <p className={styles.hero__text_gradient}>
          în inima sectorului Botanica
        </p>
        <p className={styles.hero__text_mobile}>
          Un nou ansamblu
          <br />
          rezidențial în inima
          <br />
          <span className={styles.hero__text_gradient__mobile}>
            sectorului Botanica
          </span>
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
      </div>
      {/* Location */}
      <div className={styles.location__wrapper}>
          <Image
            src={"/location-bg-mobile.avif"}
            alt="sarmizegetusa location background"
            loading="eager"
            fill
            className={`${styles.location__wrapper_bg__mobile} object-cover`}
            sizes="(max-width: 640px) 100vw"
          />
           <Image
            src={"/location-bg-laptop.avif"}
            alt="sarmizegetusa location background"
            loading="eager"
            fill
            className={`${styles.location__wrapper_bg__laptop} object-cover`}
            sizes="(max-width: 640px) 100vw"
          />
         <Image
            src={"/location-bg-large.avif"}
            alt="sarmizegetusa location background"
            loading="eager"
            fill
            className={styles.location__wrapper_bg__large}
            sizes="(max-width: 640px) 100vw"
          />
        <HeartAnimate />
        <p className={styles.location__title_text}>
          Trăiește într-o {""}
          <br className="" /> locație fără precedent {""}
        </p>
        <p className={styles.location__description_text}>
          Un proiect de amploare ce oferă echilibrul
          <br />
          dintre confort și acces rapid
          <br />
          la tot ce contează
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
      {/* Facilities */}
      <Facilities />
    </div>
    
    </>
  );
};

export default Hero;
