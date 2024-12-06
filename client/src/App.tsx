import "./App.css";

import NavBar from "./components/molecule/navbar";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectPage from "./pages/project";

function App() {
  const nav = [
    { link: "/", title: "ABOUT" },
    { link: "/", title: "EXPERIENCE" },
    { link: "/", title: "POJECTS" },
    { link: "/", title: "CONTACT" },
  ];

  return (
    <div className="App bg-dark-blue w-screen h-screen box-border flex flex-col">
      <header className="max-h-[20%]">
        {/* <NavBar list={nav} /> */}
      </header>
      <body className="max-h-[100%] w-[100%] p-24 flex justify-between">
        {/* <HomePage /> */}
        <section className="w-[50%]">
          <AboutPage />
        </section>
        <section className="w-[50%]">
          <ProjectPage />
        </section>
      </body>
    </div>
  );
}

export default App;
