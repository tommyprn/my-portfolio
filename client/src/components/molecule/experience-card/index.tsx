import Card from "../../atom/card";

interface ExperienceCardProps {
  company: string;
  endDate: string;
  startDate: string;
  occupation: string;
  description: string;
}

function ExperienceCard({
  company,
  endDate,
  startDate,
  occupation,
  description,
}: ExperienceCardProps) {
  return (
    <Card
      id="project-card"
      className="flex justify-end w-[80%] "
    >
      <section className="text-left flex gap-8">
        <div className="text-pale-peach-600 text-xs flex flex-col pt-1 whitespace-nowrap ">
          <span>{startDate}</span>
          <span>-</span>
          <span>{endDate}</span>
        </div>

        <div className="w-full flex flex-col item-start">
          <span
            id="project-title"
            className="font-bold text-pale-peach-800"
          >
            {occupation}
            {company !== "" && " · "}
            {company}
          </span>
          <p
            id="project-description"
            className="text-xs text-pale-peach-600 text-justify"
          >
            {description}
          </p>
        </div>
      </section>
    </Card>
  );
}

export default ExperienceCard;
