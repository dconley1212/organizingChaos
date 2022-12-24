import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import backgroundImg from "../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";

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
        <h1>Organize Chaos</h1>
        <div>
          <Image
            src={backgroundImg}
            alt="Woman standing in her home"
            layout="fill"
            objectFit="cover"
          />
          <h2>Home organization at your fingertips, literally.</h2>
        </div>
      </main>
    </>
  );
}
