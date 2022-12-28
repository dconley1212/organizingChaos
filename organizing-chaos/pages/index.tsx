import Head from "next/head";
import { Inter } from "@next/font/google";
import Introduction from "./LandingPage/introduction";

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
        <Introduction />
      </main>
    </>
  );
}
