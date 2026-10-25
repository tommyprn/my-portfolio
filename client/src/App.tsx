import { useRef, useState, useEffect } from "react";
import "./App.css";

import AboutPage from "./pages/about";
import ProjectPage from "./pages/project";
import ExperiencePage from "./pages/experience";

function App() {
  const [experience, setExperience] = useState<boolean>(true);

  // Use HTMLElement instead of HTMLInputElement for <section>
  const expRef = useRef<HTMLElement | null>(null);
  const projRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === expRef.current) {
              setExperience(true);
            } else if (entry.target === projRef.current) {
              setExperience(false);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Triggers when section enters the upper portion of screen
        threshold: 0,
      }
    );

    if (expRef.current) observer.observe(expRef.current);
    if (projRef.current) observer.observe(projRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToExp = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToProj = () => {
    projRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <main className="App bg-dark-blue box-border flex flex-col">
      <header className="max-h-[20%]"></header>
      <div className="max-h-[100%] w-[100%] p-8 lg:p-0 lg:px-24 flex flex-col lg:flex-row justify-between">
        <section className="lg:w-[50%] mb-8 lg:mb-0 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:py-24">
          <AboutPage
            onClickExp={scrollToExp}
            onClickProj={scrollToProj}
            isExperience={experience}
          />
        </section>

        <section className="lg:w-[50%] gap-4 flex flex-col lg:pl-8 lg:py-24">
          <section ref={expRef} className="gap-4 flex flex-col">
            <span className="font-bold text-lg self-start text-pale-peach-800">
              Experience
            </span>
            <ExperiencePage />
          </section>

          <section ref={projRef} className="gap-4 flex flex-col">
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
