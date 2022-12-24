import Image from "next/image";
import backgroundImg from "../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";
import styles from "../styles/Home.module.css";

const Introduction = () => {
  return (
    <div className={styles.upperDiv}>
      <Image
        src={backgroundImg}
        alt="Woman standing in her home"
        layout="fill"
        objectFit="contain"
      />
      <h2 className={styles.slogan}>
        Home organization at your fingertips, literally.
      </h2>
    </div>
  );
};

export default Introduction;
