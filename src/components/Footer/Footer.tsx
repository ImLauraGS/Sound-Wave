import React from 'react'
import Rrss from '../RRSS/Rrss'
import styles from './footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <Rrss/>
    </footer>
  )
}
