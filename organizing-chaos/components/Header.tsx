interface HeaderProps {
  children: string | JSX.Element;
  className: string;
}

const Header = (props: HeaderProps) => {
  const { children, className } = props;
  return <h2 className={className}>{children}</h2>;
};

export default Header;
