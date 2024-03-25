import Newsletter from './Newsletter';
import styles from './Footer.module.css';

export default function FooterSections() {
  return (
    <footer>
      <div className={styles.footerSections}>
        <div className={styles.footerSection}>
          <h5>newsletter</h5>
          <Newsletter />
        </div>
        <div className={styles.footerSection}>
          <h5>help</h5>
          <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h5>company</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h5>social</h5>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Tiktok</a></li>
            <li><a href="#">Spotify</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <small>&copy; 2024 clothing store</small>
      </div>
    </footer>
  );
}
