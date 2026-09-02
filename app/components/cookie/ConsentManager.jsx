"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import {
  loadConsent,
  saveConsent,
  subscribeToConsent,
  updateGTMConsent,
  pushConsentEvent,
} from "../../../lib/consent";
import {
  applyAnalyticsConsent,
  initializeConsentMode,
} from "../../../lib/analytics";
import {
  CONSENT_TRANSLATIONS,
  getConsentLocale,
} from "./consent-translations";
import { track } from "../../../lib/track";

const DEFAULT_PREFS = { analytics: false, marketing: false };

function getConsentSnapshot() {
  return Boolean(loadConsent());
}

function getServerConsentSnapshot() {
  return true;
}

function CookieIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </svg>
  );
}

export default function ConsentManager() {
  const pathname = usePathname();
  const routeLocale = getConsentLocale(pathname);
  const [locale, setLocale] = useState(routeLocale);
  const copy = CONSENT_TRANSLATIONS[locale];

  useEffect(() => {
    setLocale(routeLocale);
  }, [routeLocale]);
  const hasConsent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const [consentReady, setConsentReady] = useState(false);
  const previousFocusRef = useRef(null);
  const dialogRef = useRef(null);
  const bannerVisible = !hasConsent;
  const ctaVisible = consentReady && hasConsent && !modalOpen;

  useEffect(() => {
    initializeConsentMode();
    const consent = loadConsent();

    if (consent) updateGTMConsent(consent);
    void applyAnalyticsConsent(consent?.analytics === true);
    setConsentReady(true);
  }, []);

  const openSettings = useCallback(() => {
    const consent = loadConsent();
    previousFocusRef.current = document.activeElement;
    setPrefs(
      consent
        ? {
            analytics: consent.analytics,
            marketing: consent.marketing,
          }
        : DEFAULT_PREFS,
    );
    setModalOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("open-consent-manager", openSettings);
    return () =>
      window.removeEventListener("open-consent-manager", openSettings);
  }, [openSettings]);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeSettings();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [closeSettings, modalOpen]);

  const applyConsent = useCallback((newPrefs, eventName) => {
    saveConsent(newPrefs);
    updateGTMConsent(newPrefs);
    if (newPrefs.analytics) pushConsentEvent(eventName, newPrefs);
    void applyAnalyticsConsent(newPrefs.analytics).then(() => {
      if (newPrefs.analytics)
        track("cookie_consent_given", {
          choice: eventName,
          analytics: newPrefs.analytics,
          marketing: newPrefs.marketing,
        });
    });
    setModalOpen(false);
  }, []);

  const handleAcceptAll = () =>
    applyConsent({ analytics: true, marketing: true }, "consent_accepted_all");

  const handleRejectAll = () =>
    applyConsent(
      { analytics: false, marketing: false },
      "consent_rejected_all",
    );

  const handleSavePrefs = () => applyConsent(prefs, "consent_saved_custom");

  return (
    <>
      {bannerVisible && !modalOpen && (
        <div
          role="region"
          aria-label={copy.regionLabel}
          lang={locale}
          className={styles.overlay}
        >
          <div className={styles.card}>
            <div className={styles.card__head}>
              <div className={styles.card__head_title}>
                <span className={styles.card__icon}>
                  <CookieIcon className={styles.card__icon_svg} />
                </span>
                <p className={styles.card__title}>{copy.bannerTitle}</p>
              </div>
              <div
                role="group"
                aria-label={copy.languageSelectorLabel}
                className={styles.card__langs}
              >
                <button
                  type="button"
                  lang="ro"
                  aria-pressed={locale === "ro"}
                  className={`${styles.card__lang} ${locale === "ro" ? styles.card__lang_active : ""}`}
                  onClick={() => setLocale("ro")}
                >
                  RO
                </button>
                <button
                  type="button"
                  lang="ru"
                  aria-pressed={locale === "ru"}
                  className={`${styles.card__lang} ${locale === "ru" ? styles.card__lang_active : ""}`}
                  onClick={() => setLocale("ru")}
                >
                  RU
                </button>
              </div>
            </div>

            <p className={styles.card__desc}>{copy.bannerDescription}</p>

            <div className={styles.card__actions}>
              <button
                type="button"
                onClick={handleRejectAll}
                className={styles.btn_ghost}
              >
                {copy.deny}
              </button>
              <button
                type="button"
                onClick={openSettings}
                className={styles.btn_ghost}
              >
                {copy.customize}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className={styles.btn_primary}
              >
                {copy.allowAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {ctaVisible && (
        <button
          type="button"
          aria-label={copy.preferencesTitle}
          aria-haspopup="dialog"
          aria-controls="cookie-settings-dialog"
          title={copy.preferencesTitle}
          onClick={openSettings}
          className={styles.cta}
        >
          <CookieIcon className={styles.cta__svg} />
        </button>
      )}

      {modalOpen && (
        <div
          className={styles.overlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSettings();
          }}
        >
          <div
            ref={dialogRef}
            id="cookie-settings-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            lang={locale}
            tabIndex={-1}
            className={`${styles.card} ${styles.card_modal}`}
          >
            <div className={styles.card__head}>
              <div className={styles.card__head_title}>
                <span className={styles.card__icon}>
                  <CookieIcon className={styles.card__icon_svg} />
                </span>
                <h2 id="cookie-settings-title" className={styles.card__title}>
                  {copy.preferencesTitle}
                </h2>
              </div>
              <button
                type="button"
                aria-label={copy.close}
                onClick={closeSettings}
                className={styles.card__close}
              >
                ✕
              </button>
            </div>

            <ConsentRow
              label={copy.essentials}
              description={copy.essentialsDescription}
              alwaysActiveLabel={copy.alwaysActive}
              alwaysOn
            />

            <ConsentRow
              label={copy.analytics}
              description={copy.analyticsDescription}
              checked={prefs.analytics}
              onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
            />

            <ConsentRow
              label={copy.marketing}
              description={copy.marketingDescription}
              checked={prefs.marketing}
              onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              last
            />

            <div className={styles.card__actions}>
              <button
                type="button"
                onClick={handleRejectAll}
                className={styles.btn_ghost}
              >
                {copy.deny}
              </button>
              <button
                type="button"
                onClick={handleSavePrefs}
                className={styles.btn_ghost}
              >
                {copy.savePreferences}
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className={styles.btn_primary}
              >
                {copy.allowAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ConsentRow({
  label,
  description,
  checked,
  onChange,
  alwaysOn,
  alwaysActiveLabel,
  last,
}) {
  return (
    <div className={`${styles.row} ${last ? styles.row_last : ""}`}>
      <div className={styles.row__info}>
        <p className={styles.row__label}>{label}</p>
        <p className={styles.row__desc}>{description}</p>
      </div>
      {alwaysOn ? (
        <span className={styles.row__always}>{alwaysActiveLabel}</span>
      ) : (
        <button
          role="switch"
          aria-label={label}
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={`${styles.toggle} ${checked ? styles.toggle_on : ""}`}
        >
          <span className={styles.toggle__knob} />
        </button>
      )}
    </div>
  );
}
