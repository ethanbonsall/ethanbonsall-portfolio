import linkedinLogo from "./assets/linkedin-logo.jpeg";
import githubLogo from "./assets/github-logo.png";
import profilePic from "./assets/image.jpeg";
import Courses from "./courses";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://www.ethanbonsall.com/api/webpage/"
        );

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        const data = await response.json();
        setLoading(false);

        if (!Array.isArray(data)) {
          throw new Error("Invalid response format");
        }

        setPhotos(Array.isArray(data) ? data.map((photo) => photo.url) : []);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setPhotos([]); // Prevents .map() errors
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="bg-[#f5efe7] flex flex-col items-center font-roboto min-h-screen pt-6">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full bg-[#d8c4b6] text-[#213555] p-5 border-y-2">
        <div className="flex flex-col pl-5">
          <h1 className="m-1 text-4xl font-bold">Ethan Bonsall</h1>
          <h4 className="m-1 text-2xl">
            UNC Chapel Hill Sophomore | Software Developer
          </h4>
          <h4 className="m-1">
            Philadelphia, Harrisburg & Pittsburgh, PA | Chapel Hill & Charlotte,
            NC
          </h4>
        </div>
        <div className="flex gap-4 items-center pr-10">
          <a
            href="https://www.linkedin.com/in/ethanbonsall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="image-hover w-24 h-auto"
            />
          </a>
          <a
            href="https://github.com/ethanbonsall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              className="image-hover w-14 h-auto"
            />
          </a>
          <img
            src={profilePic}
            alt="Profile"
            className="image-hover w-40 h-40 rounded-full ml-6 border-2"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl p-5 w-[93%] mt-5 border-2">
        <h1 className="text-4xl font-bold">About Me</h1>
        <hr className="border-black my-2" />
        <p className="text-2xl">
          Hi! I’m Ethan Bonsall, originally from Camp Hill, Pennsylvania, and
          currently an undergraduate studying Computer Science at UNC Chapel
          Hill with a 3.7 GPA. I’m a member of Computer Science & Social Good,
          where I help develop websites and apps for nonprofit organizations,
          blending my passion for technology and social impact. My expertise
          includes web development, artificial intelligence, and machine
          learning algorithms, with a focus on creating practical and innovative
          solutions. Outside of academics, I’m a sports enthusiast who enjoys
          playing soccer and tennis, cheering on the Steelers, hiking, and
          spending time with friends. I am currently an Associate Programmer
          Intern at Sheetz.
        </p>
      </section>

      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl px-5 py-4 w-[93%] mt-5 border-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <hr className="border-black my-2" />
        <h2 className="text-2xl font-semibold">Web Projects</h2>
        {loading ? (
          <p className="text-xl">Loading projects...</p>
        ) : (
          <div className="flex mt-4 grid-4">
            {photos.slice(0, 8).map((photo, index) => (
              <img
                src={photo}
                alt={`Project ${index}`}
                className="w-auto h-auto object-cover rounded-xl border-2 shadow-md"
              />
            ))}
          </div>
        )}
      </section>
      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl px-5 py-4 w-[93%] mt-5 border-2">
        <h1 className="text-4xl font-bold">Education</h1>
        <hr className="border-black my-2" />
        <h2 className="text-2xl font-semibold">
          University of North Carolina at Chapel Hill
        </h2>
        <p className="text-xl">Bachelor of Science in Computer Science</p>
        <p className="text-xl">Expected Graduation: May 2026</p>
        <p className="text-xl">GPA: 3.7/4.0</p>
      </section>

      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl px-5 py-4 w-[93%] mt-5 border-2">
        <h1 className="text-4xl font-bold">Classes</h1>
      </section>
      <Courses />

      {/* Skills & Technologies Section */}
      <section className="bg-[#d8c4b6] text-[#213555] rounded-xl p-5 w-[93%] my-2 border-2">
        <h1 className="text-4xl font-bold">Skills & Technologies</h1>
        <hr className="border-black my-2" />

        <h2 className="underline text-2xl font-semibold">
          Programming Languages
        </h2>
        <ul className="list-disc pl-5 text-xl">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>SQL</li>
          <li>Java</li>
          <li>C++</li>
          <li>R</li>
          <li>Python</li>
        </ul>

        <h2 className="underline text-2xl font-semibold mt-2">
          Frameworks & Libraries
        </h2>
        <ul className="list-disc pl-5 text-xl">
          <li>
            <strong>Frontend:</strong> React, Angular, Bootstrap
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> Supabase, MySQL, PostgreSQL
          </li>
        </ul>

        <h2 className="underline text-2xl font-semibold mt-2">
          Tools & Platforms
        </h2>
        <ul className="list-disc pl-5 text-xl">
          <li>Microsoft Office Suite (Word, Excel, PowerPoint, Access)</li>
          <li>Tableau (Data Visualization)</li>
          <li>Git & GitHub (Version Control)</li>
          <li>Visual Studio Code, IntelliJ IDEA (IDEs)</li>
        </ul>

        <h2 className="underline text-2xl font-semibold mt-2">
          Additional Skills
        </h2>
        <ul className="list-disc pl-5 text-xl">
          <li>RESTful API Development</li>
          <li>Machine Learning (scikit-learn, TensorFlow basics)</li>
          <li>Data Analysis & Visualization (Pandas, Matplotlib, Tableau)</li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
