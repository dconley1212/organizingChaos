import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
  // className: string;
}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
