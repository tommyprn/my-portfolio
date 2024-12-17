import { ReactNode } from "react";
import classNames from "../../../utils/class-names";

interface CardProps {
  id: string;
  border?: boolean;
  shadow?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  setIsHover?: (item: boolean) => void;
}

function Card({
  id,
  border,
  shadow,
  onClick,
  children,
  className,
  setIsHover,
}: CardProps) {
  return (
    <div
      id={id}
      className={classNames(
        "w-fit rounded-md",
        className
      )}
      onClick={() => {
        if (onClick) onClick();
      }}
      onMouseEnter={() => {
        if (setIsHover) setIsHover(true);
      }}
      onMouseLeave={() => {
        if (setIsHover) setIsHover(false);
      }}
    >
      {children}
    </div>
  );
}

export default Card;
