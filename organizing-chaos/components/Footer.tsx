import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <ul>
        <li className={styles.list}>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
