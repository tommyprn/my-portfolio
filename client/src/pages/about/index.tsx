import Menu from "../../components/atom/menu";

interface AboutProps {
  onClickExp: () => void;
  onClickProj: () => void;
  isExperience: boolean;
}

function AboutPage({
  onClickExp,
  onClickProj,
  isExperience,
}: AboutProps) {
  return (
    <div className="flex flex-col gap-4 text-left">
      <span
        id="full-name"
        className="text-4xl text-gold font-black tracking-wide"
      >
        Tommy Pranoto
      </span>

      <span
        id="occupation"
        className="text-xl text-gold font-semibold"
      >
        Front End Engineer
      </span>

      <p
        id="about-me"
        className="text-sm text-gold text-justify lg:w-[70%]"
      >
        I’m a passionate Front-End Developer with
        3 years of hands-on experience crafting
        dynamic, JavaScript-driven applications.
        Enthusiastic about creating responsive web
        designs and championing best practices in
        code implementation, I thrive on solving
        complex challenges to deliver seamless and
        engaging user experiences.
      </p>

      <div className="text-sm flex flex-col gap-2 mt-4">
        <Menu
          text="experience"
          onClick={onClickExp}
          isActive={isExperience}
        />
        <Menu
          text="past project"
          onClick={onClickProj}
          isActive={!isExperience}
        />
      </div>

      <div
        id="contacts"
        className="flex gap-4 items-center mt-8"
      >
        <a
          id="linkedin"
          rel="noreferrer"
          href="https://www.linkedin.com/in/tommypranoto/"
          target="_blank"
          className="cursor-pointer"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-[30px] w-[30px] text-jet hover:text-gray-500"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>

        <a
          id="github"
          rel="noreferrer"
          href="https://github.com/tommyprn"
          target="_blank"
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-[30px] w-[30px] text-jet hover:text-gray-500"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>

        <a
          id="whatsapp"
          rel="noreferrer"
          href="https://wa.me/+628179196363"
          target="_blank"
          className="cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-[30px] w-[30px] text-jet hover:text-gray-500"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>

        <a
          id="gmail"
          rel="noreferrer"
          href="mailto:tommyprn8@gmail.com"
          target="_blank"
          className="cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-[30px] w-[30px] text-jet hover:text-gray-500"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
