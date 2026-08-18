import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={`section ${styles.page}`} aria-labelledby="notfound-heading">
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">404</p>
        <h1 id="notfound-heading">Page <span className="accent">Not Found</span></h1>
        <p className={styles.message}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className={styles.cta}>Back to Home</Link>
      </div>
    </div>
  );
}
