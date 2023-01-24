import Head from "next/head";
import { Inter } from "@next/font/google";
// import Image from "next/image";
// import backgroundImg from "../public/images/bench-accounting-8D2k7a3wMKQ-unsplash.jpg";
// import styles from "../styles/Home.module.css";
// import { ImArrowRight2 } from "react-icons/im";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

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
        <Navbar />
        <Header slogan={slogan} />
      </main>
    </>
  );
}
