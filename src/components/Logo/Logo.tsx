import React from 'react';
import styles from './logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/">
      <div className={styles.logoContainer}>
          <img className={styles.logoImg} src="/img/logo.png" alt="" />
          <p className={styles.textLogo}>Soundwave</p>
      </div>
    </Link>
    
  )
}
