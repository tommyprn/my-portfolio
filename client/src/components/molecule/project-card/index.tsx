import { memo } from "react";
import classNames from "../../../utils/class-names";

import Card from "../../atom/card";
import Chip from "../../atom/chip";

interface ProjectCardProps {
  id?: string;
  src: string;
  url: string[] | null;
  tools: string[];
  title: string;
  description: string;
}

function ProjectCard({
  id,
  src,
  url,
  tools,
  title,
  description,
}: ProjectCardProps) {
  const targetUrl = url?.[0]?.trim();
  const hasLink = Boolean(targetUrl);
  const cardId =
    id || `project-card-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const handleClick = () => {
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card
      id={cardId}
      onClick={handleClick}
      className={classNames(
        "group flex flex-col sm:flex-row p-0 rounded-md overflow-hidden w-full  sm:min-h-[120px] bg-jet",
        hasLink &&
        "cursor-pointer lg:hover:bg-gray25 lg:hover:-translate-x-5 lg:transition ease-in-out"
      )}
    >
      <div className="overflow-hidden bg-black relative w-full h-36 sm:w-[160px] sm:h-[120px] sm:self-stretch flex-shrink-0">
        <img
          alt={title}
          src={src}
          width={160}
          height={110}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray25 opacity-40 from-5% transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <section className="text-left p-3 sm:py-2 sm:pl-3 sm:pr-4 flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h3 className="font-bold text-pale-peach-800 text-sm sm:text-base">
            {title}
          </h3>

          <p className="text-xs text-pale-peach-600 line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        <ul className="flex gap-2 sm:gap-3 overflow-x-auto flex-nowrap mt-3 sm:mt-4 no-scrollbar py-0.5">
          {tools.map((item) => (
            <li key={item} className="flex-shrink-0">
              <Chip content={item} />
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
}

export default memo(ProjectCard);

