import React from 'react'
import Form from '../Form/Form'
import styles from './layoutjoin.module.css'

export default function LayoutJoin() {
  return (
    <main className={styles.joinCointainer}>
        <h1>Join the <span>fun.</span></h1>
        <Form/>
    </main>
  )
}
