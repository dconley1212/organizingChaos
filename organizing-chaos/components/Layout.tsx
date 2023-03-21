import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({
  children,
  className,
}: {
  children: JSX.Element[] | JSX.Element;
  className: string;
}) => {
  return (
    <div className={className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
