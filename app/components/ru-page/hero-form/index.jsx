"use client";
import React from "react";
import { motion } from "motion/react";
import styles from "./hero-form.module.scss";
import ProgressBar from "../form-progress-bar";
import FormButton from "./form-button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

const Index = ({ handleToggleModal }) => {
    const router = useRouter();
    const eventIdGen = uuidv4();
    const formSubmittedEventId = uuidv4();
  
    const isMobile = useMediaQuery({
      query: "(max-width: 640px)",
    });
  
    const isLarge = useMediaQuery({
      query: "(max-width: 1920px)",
    });
  
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(false);
  
    const [userLocation, setUserLocation] = React.useState("");
    const [isEventId, setIsEventId] = React.useState("");
    const [isFBP, setIsFBP] = React.useState("");
    const [isFBC, setIsFBC] = React.useState("");
    const [isPageViewEventId, setIsPageViewEventId] = React.useState("");
    const [isFormSubmittedEventId, setIsFormSubmittedEventId] =
      React.useState("");
      
    const [isExternalId, setIsExternalId] = React.useState("");
    const [isIP, setIP] = React.useState(null);
  
    React.useEffect(() => {
      const getClientLocation = async () => {
        const res = await fetch("https://ipinfo.io/json");
        const locationData = await res.json();
        if (locationData) {
          setUserLocation(locationData.city);
          setIP(locationData.ip);
        }
      };
  
      getClientLocation();
    }, []);
  
    React.useEffect(() => {
      const pvei = localStorage.getItem("pageview_event_id");
      const ei = localStorage.getItem("external_id");
  
      if (typeof window !== "undefined") {
        setIsPageViewEventId(pvei);
        setIsExternalId(ei);
      }
    }, []);
  
     React.useEffect(() => {
      const fbp = Cookies.get("_fbp");
      setIsEventId(eventIdGen);
      setIsFBP(fbp);
    }, []);
  
    React.useEffect(() => {
      if (typeof window.fbq !== "undefined") {
        window.fbq("init", PIXEL_ID);
      }
      const fbc = Cookies.get("_fbc");
      setIsFBC(fbc)
    }, []);
  
    const formSubmitTrack = () => {
      if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
        window.fbq(
          "track",
          "Lead",
          {},
          {
            eventID: isFormSubmittedEventId,
            fbc: isFBC,
            em: email,
            ph: phone,
            fn: name,
            ct: userLocation,
            ip: isIP,
            pageview_event_id: isPageViewEventId,
            external_id: isExternalId,
          },
        );
      }
  
      if (typeof window !== "undefined" && window.posthog)
        window.posthog.capture("form_submitted", {
          fbc: isFBC,
          fbp: isFBP,
          email: email,
          phone: phone,
          name: name,
          pageview_event_id: isPageViewEventId,
          external_id: isExternalId,
          form_submitted_event_id: isFormSubmittedEventId,
        });
  
      if (!isFormSubmitted) {
        setIsFormSubmitted(true);
        router.push("/thank-you-ru");
      }
    };
    
    const handleChangeName = (e) => {
      setName(e.target.value);
    };
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleChangePhone = (value) => {
      let cleanedValue = value.replace(/^\+0+/, "+3730");
      cleanedValue = cleanedValue.replace(/^\+3730/, "+373");
  
      setPhone(cleanedValue);
    };
  
    React.useEffect(()=>{
      if(name.length >= 3 && email.match("@") && phone.length >= 12) {
        setIsDisabled(true);
      }
    }, [name,email, phone, isDisabled])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.hero__form}
      onClick={handleToggleModal}
    >
      <div className={styles.form__wrapper}>
        <button
          className={styles.hero__form_close_button}
          onClick={handleToggleModal}
        >
          <svg
            className="w-full h-full absolute top-0 left-0"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L1 17M1 1L17 17"
              stroke={`${isLarge ? "#fff" : "#494B54"}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.hero__form_inner}
          onClick={(e) => e.stopPropagation()}
        >
          <ProgressBar />
          <p className={styles.hero__form_title}>
            Введи свои контактные данные,
            <br />чтобы получить подробности
          </p>
          <form
            action=""
            className={styles.hero__form_content}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="name"
              placeholder="Имя, Фамилия"
              value={name}
              onChange={handleChangeName}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <div className={styles.phone__input}>
              <PhoneInput
                name="phone"
                defaultCountry="md"
                style={{
                  "--react-international-phone-flag-width": "40rem",
                  "--react-international-phone-flag-height": "20rem",
                  "--react-international-phone-background-color":
                    "rgba(35, 36, 47, 0.2)",
                  "--react-international-phone-text-color": "#000",
                  "--react-international-phone-border-color": "transparent",
                  "--react-international-phone-border-radius": "50%",
                  "--react-international-phone-width": "100%",
                  "--react-international-phone-height": `${
                    isMobile ? "43rem" : "50rem"
                  }`,
                  "--react-international-phone-dropdown-item-background-color":
                    "#fff",
                  "--react-international-phone-dropdown-top": isMobile
                    ? "45rem"
                    : "55rem",
                  "--react-international-phone-font-size": `${
                    isMobile ? "16px" : "17rem"
                  }`,
                }}
                value={phone}
                onChange={handleChangePhone}
              />
            </div>
            <FormButton
              textButton={"Отправить"}
              formSubmitTrack={formSubmitTrack}
              isDisabled={isDisabled}
            />
          </form>
          <motion.span className={styles.button__sparkle_1}></motion.span>
          <motion.span className={styles.button__sparkle_2}></motion.span>
          <motion.span className={styles.button__sparkle_3}></motion.span>
          <motion.span className={styles.button__sparkle_4}></motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
