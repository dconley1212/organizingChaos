import Image from "next/image";
import backgroundImg from "../../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";
import styles from "../../styles/Home.module.css";

const Introduction = () => {
  return (
    <div className={styles.main}>
      <div className={styles.upperDiv}>
        <h1 className={styles.title}>Organize Chaos</h1>
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
      </div>
      <div className={styles.lowerDiv}>
        <p className={styles.lowerDivP}>
          Are you frustrated with to do apps not being customized to help manage
          every day life? It should be easier, right?
        </p>
        {/* <p className={styles.lowerDivP}></p> */}
        <button className={styles.button}>
          Click here to change that feeling!
        </button>
      </div>
    </div>
  );
};

export default Introduction;
