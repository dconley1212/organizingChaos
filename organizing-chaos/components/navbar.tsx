import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { ImArrowRight2 } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleIconClick = (e: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <header className={styles.headerItem}>
      <div className={styles.main}>
        <h1 className={styles.title}>Organize Choas</h1>
        <nav className={open ? styles.navbarActive : styles.navbar}>
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
        <div onClick={handleIconClick} className={styles.mobile}>
          {open ? <IoClose /> : <FiMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
