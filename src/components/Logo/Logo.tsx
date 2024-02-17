import React from 'react';
import styles from './logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
        <img className={styles.logoImg} src="/img/logo.png" alt="" />
        <p className={styles.textLogo}>Soundwave</p>
    </div>
    
  )
}
