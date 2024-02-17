import Button from '@mui/material/Button/Button';
import styles from './layouthome.module.css';

export default function LayoutHome() {
  return (
    <main className={styles.main}>
        <img src="/img/landing-page-girl.png" alt="" />
        <section>
            <h1>Feel The Music</h1>
            <h3>Stream over 20 thousand songs with one click</h3>
            <Button href="/join" variant="contained">Join Now</Button>
        </section>
    </main>
  )
}
