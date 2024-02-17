import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

        <ul className={styles.navbar}>
            <li>
                <Link to={'/discover'}>Discover</Link>
            </li>
            <li>
                <Link to={'/join'}>Join</Link>
            </li>
        </ul>
 
  )
}
