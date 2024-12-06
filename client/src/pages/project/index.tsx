import melaka from "../../assets/melaka-test.png";

import ProjectCard from "../../components/molecule/project-card";

function ProjectPage() {
  const data = [
    {
      title: "ORBIT",
      description:
        "ORBIT web is used to digitalized reporting proccess of unexpected events in all of Bank Muamalat branches across Indonesia. It mainly helps internal risk management division to sort out most of their documents",
      url: "undisclosed",
    },
    {
      title: "Melaka Project",
      description:
        "Melaka is an omnichannel platform thatintegrate all of your online shops into 1 dashboard. User could manage all of their store data with only changing data in Melaka. One of our best feature is customer managing, thus combine all of  your customer data and presented to you in a more easy way to read.",
      url: "https://www.melaka.app/",
    },
    {
      title: "Auto Vehicle",
      description: "",
      url: "https://play.google.com/store/apps/details?id=com.solodream.autovehicle.pro&hl=en_US",
    },
    {
      title: "Crossbell",
      description: "",
      url: "https://github.com/novrandobilly/crossbell-frontend/tree/main",
      url2: "https://github.com/novrandobilly/crossbell-backend",
    },
    {
      title: "Retaily store asia",
      description: "",
      url: "https://store.retaily.asia/?srsltid=AfmBOopvXN6EorLC5oNCzZAq0yQP_IG5zR9NEiWBJIwIC2au_476xDWu",
    },
    {
      title: "gameas-amoeba",
      description: "",
      url: "https://github.com/novrandobilly/gameas-amoeba",
    },
  ];
  return (
    <div>
      <ProjectCard
        src={melaka}
        title={data[0].title}
        description={data[0].description}
      />
    </div>
  );
}

export default ProjectPage;
