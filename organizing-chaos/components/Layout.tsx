"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Layout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
  // className: string;
}) => {
  return (
    <div className={roboto.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
