interface ButtonProps {
  children: string | JSX.Element;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
