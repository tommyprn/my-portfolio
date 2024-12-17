import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
}

function Link({ children }: LinkProps) {
  return <div>{children}</div>;
}

export default Link;
