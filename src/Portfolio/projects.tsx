import useWebpagePhotos from "./useWebpagePhotos";
import githubLogo from "../assets/github-logo.png";
import { useState } from "react";

const Web = () => {
  const { photos, loading } = useWebpagePhotos();
  const projects = [
    {
      link: "https://a02-calculator-ethanbonsall.vercel.app/",
      git: "https://github.com/ethanbonsall/a02-calculator-ethanbonsall",
      description:
        "Frontend: HTML/CSS/JS\nStorage:In-memory only\nDetails: Logic-first calculator app with MVC architecture and test-driven development.",
    },
    {
      link: "https://a03-pixel-art-maker-ethan.vercel.app/",
      git: "https://github.com/ethanbonsall/a03-pixel-art-maker-ethan",
      description:
        "Frontend: TypeScript\nStorage: LocalStorage\nDetails: Event-driven pixel art creator with tools for drawing, erasing, and exporting.",
    },
    {
      link: "https://a04-wordle-ethanbonsall.vercel.app/",
      git: "https://github.com/ethanbonsall/a04-wordle-ethanbonsall",
      description:
        "Frontend: React + Tailwind\nBackend: Custom Wordle API\nStorage: In-memory (React State)\nDetails: Functional Wordle clone with custom tile/grid components and real-time API interaction.",
    },
    {
      link: "https://a05-pokedex-ethanbonsall.vercel.app/",
      git: "https://github.com/ethanbonsall/a05-pokedex-ethanbonsall",
      description:
        "Frontend: Next.js + React Query\nBackend: PokéAPI\nStorage: In-memory (React Query Cache)\nDetails: Paginated Pokedex viewer with detailed Pokémon pages using multiple API endpoints.",
    },
    {
      link: "https://a06-oriole-ethanbonsall.vercel.app/login",
      git: "https://github.com/ethanbonsall/a06-oriole-ethanbonsall",
      description:
        "Frontend: Next.js + Tailwind\nBackend: Supabase (DB, Auth, Functions)\nStorage: Supabase Storage\nDetails: Social media app with login, posts, likes, follows, image uploads, and infinite scroll.",
    },
    {
      link: "https://a07-alias-team-44.vercel.app/",
      git: "https://github.com/ethanbonsall/a07-alias-team-44",
      description:
        "Frontend: Next.js + Tailwind\nBackend: Supabase (Realtime, Auth, Functions)\nStorage: Supabase Storage\nDetails: Discord-style chat app with live messaging, image uploads, reactions, and servers.",
    },
    {
      link: "https://a08-design-lab-ethanbonsall.vercel.app/",
      git: "https://github.com/ethanbonsall/a08-design-lab-ethanbonsall",
      description:
        "Frontend: Next.js + Shadcn UI\nDetails: UI design challenge app exploring Shadcn components and styling techniques.",
    },
    {
      link: "https://www.ethanbonsall.com/birthday",
      git: "https://github.com/ethanbonsall/a01-personal-portfolio-ethanbonsall",
      description:
        "Frontend: React + Next.js + Tailwind + Vite\nBackend: Supabase + Spotify API\nStorage: Supabase File Storage\nDetails: Collaborative playlist app with Spotify login, song adding, image upload/view, and offline file fallback.",
    },
  ];
  const customOrder = [7, 5, 4, 3, 2, 1, 0, 6];
  const reversedPhotos = customOrder.map((i) => photos[i]);
  const reversedProjects = customOrder.map((i) => projects[i]);
  const [showDescriptions, setShowDescriptions] = useState(
    Array(reversedProjects.length).fill(false)
  );

  const toggleDescription = (index: number) => {
    setShowDescriptions((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };
  return (
    <section className="bg-[#d8c4b6] text-[#213555] z-0 rounded-xl px-5 py-4 w-[93%] mt-5 border-2">
      <h1 className="text-4xl font-bold">Projects</h1>
      <hr className="border-black my-2" />
      <h2 className="text-2xl font-semibold mb-4">Web Projects</h2>

      {loading ? (
        <p className="text-xl">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 relative">
          {reversedPhotos.slice(0, 8).map((photo, index) => (
            <div
              key={index}
              className="group relative rounded-xl transition-transform duration-300"
            >
              {/* Image with mobile tap handler */}
              <div
                className="relative z-0 md:group-hover:z-20 md:group-hover:scale-110 transition-transform duration-300"
                onClick={() => toggleDescription(index)}
              >
                <a
                  href={
                    showDescriptions[index] ? "#" : reversedProjects[index].link
                  }
                  onClick={(e) => {
                    if (showDescriptions[index]) e.preventDefault();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl"
                >
                  <img
                    src={photo}
                    alt={`Project ${index}`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </a>

                <div
                  className={`absolute left-0 right-0 ${
                    showDescriptions[index] ? "top-0" : "top-full"
                  } opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-auto`}
                >
                  <div className="bg-[#f5efe7] text-[#213555] text-sm flex justify-between items-center rounded-b-xl p-2 shadow-xl">
                    <div className="whitespace-pre-wrap text-left flex-1 mr-2">
                      {reversedProjects[index].description
                        .split("\n")
                        .map((line, i) => {
                          const [label, ...rest] = line.split(":");
                          return (
                            <div key={i}>
                              <strong>{label}:</strong>
                              {rest.join(":")}
                            </div>
                          );
                        })}
                    </div>
                    <a
                      href={reversedProjects[index].git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={githubLogo}
                        alt="GitHub"
                        className="w-6 h-6 transition-transform md:group-hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Web;
