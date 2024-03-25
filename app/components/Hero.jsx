import Image from 'next/image';
import hero from '../assets/hero.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section>
      <div className={styles.imageContainer}>
        <Image
          src={hero}
          alt="Hero image"
          fill
          quality={100}
          priority={true}
          placeholder="empty"
          className={styles.image}
        />
      </div>
    </section>
  );
}
