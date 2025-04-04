import Courses from "./courses";
import Header from "./header";
import About from "./about";
import Web from "./web";
import Education from "./classes";
import Skills from "./skills";

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
