import { ReactNode } from "react";
// import classNames from "../../../utils/class-names";

interface CardProps {
  border?: boolean;
  shadow?: boolean;
  children: ReactNode;
  className?: string;
}

function Card({
  border,
  shadow,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={`min-h-[100px] min-w-[100px] w-fit rounded-md ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
