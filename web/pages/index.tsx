import Courses from "../components/Portfolio/courses";
import Header from "../components/Portfolio/header";
import About from "../components/Portfolio/about";
import Web from "../components/Portfolio/projects";
import Education from "../components/Portfolio/classes";
import Skills from "../components/Portfolio/skills";
import Experience from "../components/Portfolio/experience";

const Portfolio = () => {
  return (
    <div className="bg-[#f5efe7] flex flex-col items-center font-roboto min-h-screen pt-6">
      <Header />
      <About />
      <Web />
      <Experience />
      <Education />
      <Courses />
      <Skills />
    </div>
  );
};

export default Portfolio;
