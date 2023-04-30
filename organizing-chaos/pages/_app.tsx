// import "../styles/globals.css";
// import Layout from "../components/Layout";
import { Roboto } from "@next/font/google";
// import Head from "./_document";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// export default function RootLayout({
//   children,
// }: {
//   children: JSX.Element[] | JSX.Element;
// }): JSX.Element {
//   return (
//     <html lang="en">
//       <head>
//         <Head />
//       </head>
//       <body className={roboto.className}>
//         <Layout>{children}</Layout>
//       </body>
//     </html>
//   );
// }

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
