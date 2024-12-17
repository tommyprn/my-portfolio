import ProjectCard from "../../components/molecule/project-card";
import generateImage from "../../utils/image-generate";

interface dataProps {
  url: string[] | null;
  src: string;
  title: string;
  tools: string[];
  description: string;
}

function ProjectPage() {
  const data: dataProps[] = [
    {
      src: generateImage("orbit"),
      url: [
        "https://github.com/tommyprn/orbit-fe",
      ],
      title: "ORBIT",
      tools: [
        "React",
        "Axios",
        "Redux",
        "Formik",
        "Material-UI",
      ],
      description:
        "ORBIT web is used to digitalized reporting proccess of unexpected events in all of Bank Muamalat branches across Indonesia. It mainly helps internal risk management division to sort out most of their documents",
    },
    {
      src: generateImage("melaka"),
      url: ["https://www.melaka.app/"],
      title: "Melaka Project",
      tools: [
        "Next.js",
        "Jest",
        "Axios",
        "Xstate",
        "Storybook",
      ],
      description:
        "Melaka is an omnichannel platform thatintegrate all of your online shops into 1 dashboard. User could manage all of their store data with only changing data in Melaka. One of our best feature is customer managing, thus combine all of  your customer data and presented to you in a more easy way to read.",
    },
    {
      src: generateImage("autovehicle"),
      url: [
        "https://play.google.com/store/apps/details?id=com.solodream.autovehicle.pro&hl=en_US",
      ],
      title: "Autovehicle Pro",
      tools: [
        "React Native",
        "Jotai",
        "Axios",
        "OsmiCSX",
      ],
      description:
        "Autovehicle pro is a mobile application made using company tracking system to track bus drivers/ school buses. Autovehicle also used for driver attendance, and pay check.",
    },
    {
      src: generateImage("crossbell"),
      url: [
        "https://github.com/novrandobilly/crossbell-frontend/tree/main",
      ],
      title: "Crossbell",
      tools: [
        "React",
        "JWT",
        "Redux",
        "Express",
        "Material-UI",
      ],
      description:
        "Crossbell is a web platform dedicated to revolutionizing the job search, recruitment, and headhunting process. Designed to connect top talent with leading companies, Crossbell offers a seamless and efficient user experience for both job seekers and recruiters.",
    },
    {
      src: generateImage("retaily"),
      url: [
        "https://store.retaily.asia/?srsltid=AfmBOopvXN6EorLC5oNCzZAq0yQP_IG5zR9NEiWBJIwIC2au_476xDWu",
      ],
      title: "Retaily store asia",
      tools: ["PHP", "Wordpress", "Elementor"],
      description:
        "Retaily Store Asia is a specialized e-commerce platform dedicated to providing a curated selection of high-quality electronics from trusted brands. Designed for discerning consumers, Retaily Store Asia combines convenience, reliability, and exclusivity in its offerings",
    },
    {
      src: generateImage("amoeba"),
      url: [
        "https://github.com/novrandobilly/gameas-amoeba",
      ],
      title: "gameas-amoeba",
      tools: [
        "Next.js",
        "mongodb",
        "Framer-Motion",
        "SCSS",
      ],
      description:
        "A unique psychological test presented as a gamified website experience. Users engage with the platform by answering multiple-choice questions designed to uncover insights about their personality, preferences, or mindset in an interactive and engaging way.",
    },
    {
      src: generateImage("dumbsound"),
      url: [
        "https://github.com/tommyprn/Final_task",
      ],
      title: "Dumbsound",
      tools: [
        "React",
        "Axios",
        "Redux",
        "Express",
        "Bootstrap",
      ],
      description:
        "A creative bootcamp project that combines the music streaming functionality of Spotify with the sleek interface design of Netflix. Developed as a final task, Dumbsound showcases music cataloging, playback features, and a visually appealing user experience.",
    },
    {
      src: generateImage("dumbflix"),
      url: [
        "https://github.com/tommyprn/DW16BMU21_dumbflix",
      ],
      title: "Dumbflix",
      tools: [
        "React",
        "Axios",
        "Redux",
        "Express",
        "Bootstrap",
      ],
      description:
        "A learning project developed during the Dumbways bootcamp, Dumbflix replicates the functionality and user interface of Netflix. It serves as a practical exercise in creating a responsive, interactive video-streaming platform with essential features like content browsing, playback, and a modern design.",
    },
  ];

  return (
    <div className="flex justify-between max-h-[100%]">
      <div
        className="items-end flex flex-col gap-4 w-full"
        data-testid="project-list"
      >
        {data.map((item, i) => (
          <div key={i}>
            <ProjectCard
              url={item.url}
              src={item.src}
              tools={item.tools}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
