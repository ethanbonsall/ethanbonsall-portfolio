import Courses from "/workspaces/a01-personal-portfolio-ethanbonsall/src/Portfolio/courses.tsx";
import Header from "/workspaces/a01-personal-portfolio-ethanbonsall/src/Portfolio/header.tsx";
import About from "/workspaces/a01-personal-portfolio-ethanbonsall/src/Portfolio/about.tsx";
import Web from "/workspaces/a01-personal-portfolio-ethanbonsall/src/Portfolio/web.tsx";
import Education from "/workspaces/a01-personal-portfolio-ethanbonsall/src/Portfolio/classes.tsx";
import Skills from "/workspaces/a01-personal-portfolio-ethanbonsall/src/Portfolio/skills.tsx";

const Portfolio = () => {
  return (
    <div className="bg-[#f5efe7] flex flex-col items-center font-roboto min-h-screen pt-6">
      <Header />
      <About />
      <Web />
      <Education />
      <Courses />
      <Skills />
    </div>
  );
};

export default Portfolio;
