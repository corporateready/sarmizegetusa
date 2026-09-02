import React from 'react'
import styles from './styles.module.scss'
import { track } from '../../../../lib/track'

const Index = () => {
  return (
    <a
      href="tel:+37376039073"
      className={`${styles.phone__link} roistat-phone`}
      onClick={() => track("phone_clicked", { placement: "header" })}
    >
      +373 76 039 073
    </a>
  );
}

export default Index