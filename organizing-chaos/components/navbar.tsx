import styles from "../styles/Navbar.module.css";
import { ImArrowRight2 } from "react-icons/im";
// import Button from './Button'

const Navbar = () => {
  return (
    <header className={styles.headerItem}>
      <div className={styles.main}>
        <h1 className={styles.title}>Organize Choas</h1>
        <nav>
          <ul className={styles.list}>
            <li>
              <a className={styles.anchor}>Our Story</a>
            </li>
            <li>
              <a className={styles.anchor}>Log in</a>
            </li>
            <li>
              <button className={styles.button}>
                Get Started
                <ImArrowRight2 />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
