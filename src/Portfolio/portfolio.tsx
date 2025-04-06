import Courses from "./courses";
import Header from "./header";
import About from "./about";
import Web from "./projects";
import Education from "./classes";
import Skills from "./skills";
import Experience from "./experience";

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
