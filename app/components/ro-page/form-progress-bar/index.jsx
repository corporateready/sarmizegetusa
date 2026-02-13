import React from 'react'
import styles from './styles.module.scss'

const Index = () => {
  return (
    <div className={styles.hero__form_progress__wrapper}>
      <span className="text-[8rem] text-white font-semibold absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 z-10">
        50%
      </span>
    </div>
  );
}

export default Index