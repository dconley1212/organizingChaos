interface HeaderProps {
  children: string | JSX.Element;
}

const Header = (props: HeaderProps) => {
  const { children } = props;
  return <h2>{children}</h2>;
};

export default Header;
