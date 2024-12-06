import melaka from "../../assets/melaka-test.png";

import ProjectCard from "../../components/molecule/project-card";

interface dataProps {
  url: string;
  url2?: string;
  src: string;
  title: string;
  tools: string[];
  description: string;
}

function ProjectPage() {
  const data: dataProps[] = [
    {
      src: "",
      url: "undisclosed",
      title: "ORBIT",
      tools: [""],
      description:
        "ORBIT web is used to digitalized reporting proccess of unexpected events in all of Bank Muamalat branches across Indonesia. It mainly helps internal risk management division to sort out most of their documents",
    },
    {
      src: melaka,
      url: "https://www.melaka.app/",
      title: "Melaka Project",
      tools: [""],
      description:
        "Melaka is an omnichannel platform thatintegrate all of your online shops into 1 dashboard. User could manage all of their store data with only changing data in Melaka. One of our best feature is customer managing, thus combine all of  your customer data and presented to you in a more easy way to read.",
    },
    {
      src: "",
      url: "https://play.google.com/store/apps/details?id=com.solodream.autovehicle.pro&hl=en_US",
      title: "Autovehicle Pro",
      tools: [""],
      description:
        "Autovehicle pro is a mobile application made using company tracking system to track bus drivers/ school buses. Autovehicle also used for driver attendance, and pay check.",
    },
    {
      src: "",
      url: "https://github.com/novrandobilly/crossbell-frontend/tree/main",
      url2: "https://github.com/novrandobilly/crossbell-backend",
      title: "Crossbell",
      tools: [""],
      description: "",
    },
    {
      src: "",
      url: "https://store.retaily.asia/?srsltid=AfmBOopvXN6EorLC5oNCzZAq0yQP_IG5zR9NEiWBJIwIC2au_476xDWu",
      title: "Retaily store asia",
      tools: [""],
      description: "",
    },
    {
      src: "",
      url: "https://github.com/novrandobilly/gameas-amoeba",
      title: "gameas-amoeba",
      tools: [""],
      description: "",
    },
    {
      src: "",
      url: "https://github.com/tommyprn/Final_task",
      title: "Dumbsound",
      tools: [""],
      description: "",
    },
    {
      src: "",
      url: "https://github.com/tommyprn/DW16BMU21_dumbflix",
      title: "Dumbflix",
      tools: [""],
      description: "",
    },
  ];

  return (
    <div className="flex justify-between max-h-[100%] ">
      <div className=""></div>
      <div
        className="overflow-x-hidden items-end flex flex-col gap-4 w-full"
        data-testid="project-list"
      >
        {data.map((item) => (
          <ProjectCard
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
