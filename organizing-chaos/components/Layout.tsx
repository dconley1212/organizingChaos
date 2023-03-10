import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
