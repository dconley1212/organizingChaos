import Image from "next/image";
import backgroundImg from "../../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";
import styles from "../../styles/Home.module.css";

const Introduction = () => {
  return (
    <div className={styles.upperDiv}>
      <section>
        <h1 className={styles.slogan}>Organize Chaos</h1>
        <Image
          src={backgroundImg}
          alt="Woman standing in her home"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <h2 className={styles.slogan}>
          Home organization at your fingertips, literally.
        </h2>
      </section>
      <section></section>
    </div>
  );
};

export default Introduction;
