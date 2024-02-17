import React from 'react'
import { Link } from 'react-router-dom';
import Twitter from '/img/twitter.svg';
import Facebook from '/img/facebook.svg'
import styles from './rrss.module.css'


export default function Rrss() {
  return (
    <ul className={styles.rrssContainer}>
        <li>
            <Link to ="">
                <img src={Twitter} alt="" /> Twitter
            </Link>
        </li>
        <li>          
            <Link to ="">
                <img src={Facebook} alt="" /> Facebook
            </Link>
        </li>
    </ul>
  )
}
