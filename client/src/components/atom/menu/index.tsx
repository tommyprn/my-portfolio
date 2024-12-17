import { useState } from "react";
import classNames from "../../../utils/class-names";

interface MenuProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

function Menu({
  text,
  onClick,
  isActive,
}: MenuProps) {
  const [isHover, setIsHover] =
    useState<boolean>(false);

  return (
    <button
      onClick={onClick}
      className="cursor-pointer items-center lg:flex hidden w-fit"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span
        className={classNames(
          "h-[1px] transition-all ",
          isHover || isActive
            ? "w-[50px]  bg-gray-300 "
            : "w-[30px]  bg-gray25"
        )}
      />
      <span
        className={
          isHover || isActive
            ? "text-gray-300 ml-4"
            : "text-gray25 ml-4"
        }
      >
        {text}
      </span>
    </button>
  );
}

export default Menu;
