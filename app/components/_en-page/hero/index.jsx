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

        <p className={styles.hero__text}>Special Offer for Investors</p>

        <p className={styles.description}>
          Invest in a new real estate project {""}
          <br className="block" />
          before sales launch
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

        <p className={styles.location__title_text}>
          Prime Location {""}
          <br className="block sm:hidden" />
          in the {""}
          <br className="hidden sm:inline-block" />
          Heart {""}
          <br className="block sm:hidden" />
          of Botanica District
        </p>
        <p className={styles.location__description_text}>
          Soon, a new residential complex that will {""}
          <br className="block sm:hidden" />
          elevate {""} <br className="hidden sm:block" /> the quality of urban
          living
        </p>

        <p className={styles.location__title_text__bottom}>
          A New Standard {""}
          <br />
          of Urban Living
        </p>

        <p className={styles.location__description_text__bottom}>
          Located between two iconic parks and two {""}
          <br />
          garden squares — where urban living {""}
          <br />
          embraces natural serenity
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
