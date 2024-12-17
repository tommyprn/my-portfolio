import {
  useRef,
  useState,
  useEffect,
} from "react";
import "./App.css";

import AboutPage from "./pages/about";
import ProjectPage from "./pages/project";
import ExperiencePage from "./pages/experience";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] =
    useState<number>(0);
  const [experience, setExperience] =
    useState<boolean>(true);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position >= 600) {
      setExperience(false);
    } else {
      setExperience(true);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const expRef = useRef<HTMLInputElement | null>(
    null
  );
  const projRef = useRef<HTMLInputElement | null>(
    null
  );

  const scrollToExp = () => {
    if (expRef.current) {
      expRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setExperience(true);
    }
  };

  const scrollToProj = () => {
    if (projRef.current) {
      projRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setExperience(false);
    }
  };

  return (
    <main className="App bg-dark-blue box-border flex flex-col">
      <header className="max-h-[20%]"></header>
      <div className="max-h-[100%] w-[100%] p-8 lg:p-0 lg:px-24 flex flex-col lg:flex-row justify-between ">
        <section className="lg:w-[50%] mb-8 lg:mb-0 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:py-24">
          <AboutPage
            onClickExp={scrollToExp}
            onClickProj={scrollToProj}
            isExperience={experience}
          />
        </section>

        <section className="lg:w-[50%] gap-4 flex flex-col lg:pl-8 lg:py-24">
          <section
            ref={expRef}
            className="gap-4 flex flex-col "
          >
            <span className="font-bold text-lg self-start text-pale-peach-800">
              Experience
            </span>
            <ExperiencePage />
          </section>

          <section
            ref={projRef}
            className="gap-4 flex flex-col "
          >
            <span className="font-bold text-lg self-start text-pale-peach-800">
              Project
            </span>
            <ProjectPage />
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
