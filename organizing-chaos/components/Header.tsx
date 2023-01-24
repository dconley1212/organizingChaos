interface props {
  slogan: string;
}

const Header = ({ slogan }: props) => {
  return <h2>{slogan}</h2>;
};

export default Header;
