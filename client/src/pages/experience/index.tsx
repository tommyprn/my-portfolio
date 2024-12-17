import ExperienceCard from "../../components/molecule/experience-card";

interface dataProps {
  company: string;
  endDate: string;
  startDate: string;
  occupation: string;
  description: string;
}

function ExperiencePage() {
  const data: dataProps[] = [
    {
      company: "",
      endDate: "Aug 2023",
      startDate: "Jun 2022",
      occupation: "Freelance Frontend developer",
      description:
        "In addition to my professional experience, I have freelance experience as a frontend developer. The project involved building a dynamic web application, creating a customized website leveraging efficient and user-friendly solution. These freelance projects further enhanced my technical versatility and ability to adapt to varying project requirements.",
    },
    {
      company: "PT. Nawa Data Solutions",
      endDate: "Aug 2024",
      startDate: "Feb 2024",
      occupation: "Frontend Web Developer",
      description:
        "Collaborated with backend developers to design and build innovative websites for a state-of-the-art risk management system. Working closely with users, I defined essential features and optimized web flows to ensure an enhanced user experience. My role also involved implementing advanced encryption techniques to safeguard data, demonstrating my commitment to robust security and data protection.",
    },
    {
      company: "Cloudgakkai",
      endDate: "May 2023",
      startDate: "Apr 2022",
      occupation:
        "Frontend Web/ Mobile Developer",
      description:
        "Implement robust website features that improved functionality and user satisfaction. By introducing comprehensive unit testing, I significantly enhanced product reliability. Additionally, I designed and developed mobile features and interfaces, elevating the overall user experience and contributing to the platform’s versatility.",
    },
    {
      company: "PT. Inti Dinamis",
      endDate: "Nov 2021",
      startDate: "Oct 2020",
      occupation: "Fullstack developer",
      description:
        "Utilized the MERN stack to create reusable and scalable code, ensuring high maintainability for the company's projects. My responsibilities included diagnosing and resolving bugs efficiently to maintain optimal functionality and user satisfaction. Furthermore, I implemented strong security measures and data protection protocols, reinforcing application integrity and trustworthiness.",
    },
  ];

  return (
    <div className="flex justify-between">
      <ul
        className="overflow-x-hidden items-end flex flex-col gap-4 w-full "
        data-testid="project-list"
      >
        {data.map((item, i) => (
          <li key={i}>
            <ExperienceCard
              company={item.company}
              endDate={item.endDate}
              startDate={item.startDate}
              occupation={item.occupation}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperiencePage;
