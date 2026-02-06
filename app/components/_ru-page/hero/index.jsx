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
          Специальное предложение {""}
          <br className={styles.hero__text__br} />
          для инвесторов {""}
        </p>

        <p className={styles.description}>
          Инвестируй в новый проект {""}
          <br className="inline-block sm:hidden" />
          недвижимости {""} <br className="hidden sm:inline-block" />
          до старта продаж
        </p>

        <button className={styles.button__detail} onClick={handleToggle}>
          <span className={styles.button__detail__text}>
            Узнай детали сейчас
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
          Предложение действительно <span>до 15.11.2025</span>
        </p>

        <p className={styles.location__title_text}>
          Беспрецедентная локация {""}
          <br />в самом сердце Ботаники
        </p>
        <p className={styles.location__description_text}>
          Совсем скоро — новый жилой комплекс, {""}
          <br className="block" />
          который поднимет качество городской {""}
          <br className="inline-block sm:hidden" />
          жизни {""} <br className="hidden sm:inline-block" />
          на новый уровень
        </p>

        <p className={styles.location__title_text__bottom}>
          Новый стандарт {""}
          <br />
          городской жизни
        </p>

        <p className={styles.location__description_text__bottom}>
          Между двумя большими парками и двумя {""}
          <br />
          зелеными скверами — где спокойствие {""}
          <br />
          становится частью вашей {""}
          <br />
          повседневной жизни
        </p>
      </div>
      <Facilities />
    </div>
  );
};

export default Hero;
