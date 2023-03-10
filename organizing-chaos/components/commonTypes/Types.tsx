import { ReactNode } from "react";
interface ReusableComponentProps {
  children: string | JSX.Element;
  className: string;
}

interface HomeButtonProps {
  children: ReactNode;
  className: string;
}

export type { ReusableComponentProps, HomeButtonProps };
