import Head from "next/head";
import { Inter } from "@next/font/google";
// import Introduction from "./LandingPage/introduction";
import Image from "next/image";
import backgroundImg from "../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";
import styles from "../styles/Home.module.css";
import { ImArrowRight2 } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Organization</title>
        <meta
          name="description"
          content="Organize your home or family life and reduce stress"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
          </div>
          <div className={styles.lowerDiv}>
            <p className={styles.lowerDivP}>
              Are you frustrated with the chaos of every day life?
            </p>
            <button className={styles.button}>
              Yes? Start Here
              <ImArrowRight2 size={16} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
