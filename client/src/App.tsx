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
      <header className="">
        <NavBar list={nav} />
      </header>
      <body className="h-[100%] px-16 py-8">
        {/* <HomePage /> */}
        {/* <AboutPage /> */}
        <ProjectPage />
      </body>
    </div>
  );
}

export default App;
