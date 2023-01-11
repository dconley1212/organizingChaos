import styles from "../styles/Navbar.module.css";
import { ImArrowRight2 } from "react-icons/im";

const navbar = () => {
  return (
    <header className={styles.main}>
      <h1 className={styles.title}>Organize Choas</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItems}>Our Story</li>
          <li className={styles.listItems}>Log in</li>
          <li className={styles.listItems}>
            <button className={styles.button}>
              Get Started
              <ImArrowRight2 />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
