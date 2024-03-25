import styles from './Newsletter.module.css';

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <form>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your email address..."
        />
        <button type="submit">
          subscribe
        </button>
      </form>
    </div>
  );
}
