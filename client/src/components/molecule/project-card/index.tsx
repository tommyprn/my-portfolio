import Card from "../../atom/card";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
}

function ProjectCard({
  src,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Card
      className="flex p-0 rounded-md overflow-hidden bg-jet w-[200px] h-[100px] cursor-pointer hover:bg-gray25 hover:-translate-x-5 transition ease-in-out"
      data-testid="project-card"
    >
      <div className="overflow-hidden">
        <img
          alt={src}
          src={src}
          width={150}
          data-testid="project-image"
        />
      </div>

      <section className="text-left px-4 py-2">
        <p
          data-testid="project-title"
          className="font-bold text-gray-300"
        >
          {title}
        </p>
        <p
          data-testid="project-description"
          className="text-xs text-gray-400 w-[350px] line-clamp-2"
        >
          {description}
        </p>
      </section>
    </Card>
  );
}

export default ProjectCard;
