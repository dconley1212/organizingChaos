import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";
import backgroundImg from "../public/images/bench-accounting-8D2k7a3wMKQ-unsplash (1).jpg";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../components/Button";

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
        <Layout>
          <section className={styles.upperSection}>
            <Header className={styles.heading}>
              Take back control of your home life!
            </Header>
            <Image
              className={styles.img}
              src={backgroundImg}
              alt="woman standing in room with ipad"
            ></Image>
            <Button className={styles.buttonHome}>Start Here</Button>
            <p className={styles.homeParagraph}>
              Customize your personal life with grorcery list templates, chores,
              seasonal reminders, etc
            </p>
          </section>
        </Layout>
      </main>
    </>
  );
}
