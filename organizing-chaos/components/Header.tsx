import { ReusableComponentProps } from "./commonTypes/Types";

const Header = (props: ReusableComponentProps) => {
  const { children, className } = props;
  return <h2 className={className}>{children}</h2>;
};

export default Header;
