// import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
