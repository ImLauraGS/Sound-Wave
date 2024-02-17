import React from 'react'
import Icon from '../Icon/Icon'
import More from '/img/more.svg'
import Albums from '/img/albums.svg'
import Micro from '/img/microphone.svg'
import styles from './layoutdiscover.module.css'

export default function LayoutDiscover() {
  return (
    <main className={styles.discoverContainer}>
        <section>
          <h1>Discover new music</h1>

          <div className={styles.iconsContainer}>
            <Icon  
              img={Micro} 
              alt='Microfono'
              text='Chart'
              />
            
            <Icon 
              img={Albums}
              alt='Albums'
              text='Album'
            />
            <Icon 
              img={More} 
              alt='Mas'
              text='More'
              />
          </div>

          <h4>By joining you can venefit by listening to the latest albums released</h4>
          
        </section>

        <img className={styles.covers} src="/img/covers.jpg" alt="" />

    </main>
  )
}
