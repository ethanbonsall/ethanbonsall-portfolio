import linkedinLogo from "./assets/linkedin-logo.jpeg";
import githubLogo from "./assets/github-logo.png";
import profilePic from "./assets/image.jpeg";
import Courses from "./courses";

const Portfolio = () => {
  return (
    <div className="bg-[#f5efe7] flex flex-col items-center font-roboto min-h-screen pt-6">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full bg-[#d8c4b6] text-[#213555] p-4 border-y-2">
        <div className="flex flex-col pl-5">
          <h1 className="m-1 text-2xl font-bold">Ethan Bonsall</h1>
          <h4 className="m-1 text-lg">UNC Chapel Hill Sophomore | Software Developer</h4>
        </div>
        <div className="flex gap-4 items-center pr-10">
          <a href="https://www.linkedin.com/in/ethanbonsall/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="image-hover w-20 h-auto" />
          </a>
          <a href="https://github.com/ethanbonsall" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="image-hover w-12 h-auto" />
          </a>
          <img src={profilePic} alt="Profile" className="image-hover w-36 h-36 rounded-full ml-6 border-2" />
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl p-4 w-[93%] mt-5 border-2">
        <h1 className="text-2xl font-bold">About Me</h1>
        <hr className="border-black my-2" />
        <p className="text-lg">
          Hi! I’m Ethan Bonsall, originally from Camp Hill, Pennsylvania, and currently an undergraduate studying Computer Science at UNC Chapel Hill with a 3.7 GPA. I’m a member of Computer Science and Social Good, where I help develop websites and apps for nonprofit organizations, blending my passion for technology and social impact.
          My expertise includes web development, artificial intelligence, and machine learning algorithms, with a focus on creating practical and innovative solutions. Outside of academics, I’m a sports enthusiast who enjoys playing soccer and tennis, cheering on the Steelers, hiking, and spending time with friends.
          I’m actively seeking an internship where I can apply my skills and continue learning—let’s make something great together!
        </p>
      </section>

      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl px-4 py-3  w-[93%] mt-5 border-2">
        <h1 className="text-2xl font-bold">Classes</h1>
      </section>
      {/* Expandable Courses Section */}
      <Courses />

      {/* Skills & Technologies Section */}
      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl p-4 w-[93%] my-2 border-2">
        <h1 className="text-2xl font-bold">Skills & Technologies</h1>
        <hr className="border-black my-2" />

        <h2 className="underline text-lg font-semibold">Programming Languages</h2>
        <ul className="list-disc pl-5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>SQL</li>
          <li>Java</li>
          <li>C++</li>
          <li>R</li>
        </ul>

        <h2 className="underline text-lg font-semibold mt-2">Frameworks & Libraries</h2>
        <ul className="list-disc pl-5">
          <li><strong>Frontend:</strong> React, Angular, Bootstrap</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> Supabase, MySQL, PostgreSQL</li>
        </ul>

        <h2 className="underline text-lg font-semibold mt-2">Tools & Platforms</h2>
        <ul className="list-disc pl-5">
          <li>Microsoft Office Suite (Word, Excel, PowerPoint, Access)</li>
          <li>Tableau (Data Visualization)</li>
          <li>Git & GitHub (Version Control)</li>
          <li>Visual Studio Code, IntelliJ IDEA (IDEs)</li>
        </ul>

        <h2 className="underline text-lg font-semibold mt-2">Additional Skills</h2>
        <ul className="list-disc pl-5">
          <li>RESTful API Development</li>
          <li>Machine Learning (scikit-learn, TensorFlow basics)</li>
          <li>Data Analysis & Visualization (Pandas, Matplotlib, Tableau)</li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
