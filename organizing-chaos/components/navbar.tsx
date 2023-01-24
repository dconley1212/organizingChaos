import styles from "../styles/Navbar.module.css";
import { ImArrowRight2 } from "react-icons/im";

const Navbar = () => {
  return (
    <header className={styles.main}>
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
    </header>
  );
};

export default Navbar;
