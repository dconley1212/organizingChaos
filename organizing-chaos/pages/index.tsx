import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";

import backgroundImg from "../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";
import rowImg from "../public/images/quino-al-dhGFLj3rI0Q-unsplash (1).jpg";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../components/Button";
import { ImArrowRight2 } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const slogan: string = "An app customized for home life";
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
        <Layout className={styles.layout}>
          <section className={styles.upperSection}>
            <div className={styles.upperSectionCard}>
              <Header className={styles.heading}>
                Find product market fit faster and win!
              </Header>
              <Button className={styles.buttonHome}>
                Start Today
                <ImArrowRight2 />
              </Button>
              <p className={styles.homeParagraph}>
                We organize your strategy so you can make confident decisions
                faster, and nail your product market fit.
              </p>
            </div>
            <Image
              className={styles.img}
              src={backgroundImg}
              alt="woman standing in room with ipad"
            ></Image>
          </section>
          <section className={styles.middleSection}>
            <Header className={styles.middleHeader}>
              Product alignment = all orgs rowing together
            </Header>
            <Image
              className={styles.rowImg}
              src={rowImg}
              alt="men rowing a boat in the ocean"
            ></Image>
            <div className={styles.middleSectionCard}>
              <p className={styles.middleParagraph}>
                Communication across multiple orgs is hard. We help each org
                understand their core priorities in order to crush company
                goals.
              </p>
              <Button className={styles.middleSectionButton}>
                Learn More
                <ImArrowRight2 />
              </Button>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
