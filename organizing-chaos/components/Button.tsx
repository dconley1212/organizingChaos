import { HomeButtonProps } from "./commonTypes/Types";

const Button = ({ children, className }: HomeButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
