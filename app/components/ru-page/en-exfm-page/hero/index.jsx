"use client";
import React from "react";
import styles from "./hero.module.scss";
import Facilities from "../facilities";
import Title from "../../title";
import HeartAnimate from "../../heart-animate";
import Header from "../../shared/pages/header";

const Hero = ({ handleToggle }) => {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero}>
        <Header />
        <div className={styles.hero__dark__building_shadow}></div>
        <HeartAnimate />
        <Title textTitle="coming soon" />
        <p className={styles.hero__text}>
          Special offer for {""}
          <br className="block sm:hidden" />
          <span className={styles.text__gradient}>EXPO FORUM MOLDOVA </span>
          {""}
          <br />
          event participants
        </p>
        <p className={styles.description}>
          Invest in a new real estate project {""}
          <br className="block sm:hidden" />
          before sales{""} <br className="hidden sm:block" /> launch {""}
          <span>in December 2025</span>
        </p>
        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>
            Discover details now
          </span>
          <span className={styles.button__detail__line_bottom}></span>
          <span className={styles.button__detail__sparkle}></span>
          <span className={styles.button__detail__sparkle_2}></span>
          <span className={styles.button__detail__sparkle_3}></span>
          <span className={styles.button__detail__sparkle_4}></span>
          <span className={styles.button__detail__sparkle_5}></span>
          <span className={styles.button__detail__sparkle_6}></span>
        </button>
        <p className={styles.oferta__text}>
          Offer valid until <span>15.11.2025</span>
        </p>
        <p className={styles.location__title_text}>
          Prime location {""}
          <br className="block sm:hidden" />
          in the heart {""} <br className="hidden sm:block" /> of {""}
          <br className="block sm:hidden" />
          Botanica district
        </p>
        <p className={styles.location__description_text}>
          Soon, a new residential complex that will {""}
          <br className="block sm:hidden" />
          elevate {""} <br className="hidden sm:block" /> the quality of urban living
        </p>
        <p className={styles.location__title_text__bottom}>
          A new standard {""}
          <br />
          of urban living
        </p>
        <p className={styles.location__description_text__bottom}>
          Located between two iconic parks and two {""}
          <br />garden squares— where tranquility becomes {""}
          <br />part of your everyday life
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
