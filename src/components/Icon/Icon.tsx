import styles from './icon.module.css'

interface IconProps {
    img: string; 
    alt: string;
    text: string;
  }
  
  export default function Icon({ img, alt, text }: IconProps) {
    return (
        <div className={styles.iconContainer}>
            <img src={img} alt={alt} />
            <p>{text}</p>
        </div>
    );
  }