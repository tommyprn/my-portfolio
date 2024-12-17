import { useState } from "react";
import classNames from "../../../utils/class-names";

import Card from "../../atom/card";
import Chip from "../../atom/chip";

interface ProjectCardProps {
  src: string;
  url: string[] | null;
  tools: string[];
  title: string;
  description: string;
}

function ProjectCard({
  src,
  url,
  tools,
  title,
  description,
}: ProjectCardProps) {
  const [isHover, setIsHover] =
    useState<boolean>(false);

  const onClick = () => {
    if (url && url[0] !== "") {
      window.open(url[0], "_blank");
    }
  };

  return (
    <Card
      id="project-card"
      onClick={onClick}
      setIsHover={setIsHover}
      className={classNames(
        "flex p-0 rounded-md overflow-hidden w-[80%] min-h-[110px] bg-jet ",
        "cursor-pointer lg:hover:bg-gray25 lg:hover:-translate-x-5 lg:transition ease-in-out"
      )}
    >
      <div className="overflow-hidden relative max-h-[150px] xl:max-h-[110px]">
        <img
          alt={src}
          src={src}
          width={160}
          id="project-image"
        />
        {!isHover && (
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-gray25 opacity-40 from-5% w-[160px] h-[160px]" />
        )}
      </div>

      <section className="text-left px-4 py-2 flex flex-col justify-between w-[70%] lg-w-[60%]">
        <div>
          <div className="flex items-center gap-2">
            <span
              id="project-title"
              className="font-bold text-pale-peach-800"
            >
              {title}
            </span>

            {/* <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-[16px] w-[16px] text-white hover:text-gray-500 "
              aria-hidden="true"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"></path>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"></path>
            </svg> */}
          </div>

          <p
            id="project-description"
            className="text-xs text-pale-peach-600 line-clamp-2"
          >
            {description}
          </p>
        </div>

        <ul className="flex gap-4 flex-wrap mt-4">
          {tools.map((item, i) => (
            <li key={i}>
              <Chip content={item} />
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
}

export default ProjectCard;
