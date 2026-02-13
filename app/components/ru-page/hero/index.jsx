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
        <Title textTitle="СТАРТ ПРОДАЖ" />
        <p className={styles.hero__text}>Новый жилой комплекс</p>
        <p className={styles.hero__text_gradient}>
          в самом сердце района Ботаника
        </p>
        <p className={styles.hero__text_mobile}>
          Новый жилой
          <br />комплекс в самом
          <br />
          <span className={styles.hero__text_gradient__mobile}>
            сердце района Ботаника
          </span>
        </p>
        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>Узнайте подробности</span>
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
          Живите в локации
          <br />без аналогов
        </p>
        <p className={styles.location__description_text}>
          Масштабный жилой проект, в котором 
          <br />комфорт гармонично сочетается {""}
          <br className="inline-block sm:hidden"/>с быстрым {""}
          <br className="hidden sm:inline-block"/>доступом ко всему, что важно {""}
          <br className="inline-block sm:hidden"/>для {""}
          <br className="hidden sm:inline-block"/>современной жизни
        </p>
        <p className={styles.location__title_text__bottom}>
          Новый стандарт
          <br />городской жизни
        </p>
        <p className={styles.location__description_text__bottom}>
          Между двумя большими парками и двумя
          <br />зелеными скверами — где спокойствие {""}
          <br className="inline-block"/> становится частью вашей {""}
          <br />повседневной жизни
        </p>
      </div>
      {/* Facilities */}
      <Facilities />
    </div>
    
    </>
  );
};

export default Hero;
