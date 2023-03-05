import { ReusableComponentProps } from "./commonTypes/Types";

const Button = ({ children, className }: ReusableComponentProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
