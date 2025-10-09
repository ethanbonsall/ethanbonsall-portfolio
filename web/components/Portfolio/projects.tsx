/* eslint-disable @next/next/no-img-element */
import githubLogo from "@/public/assets/github-logo-alt.png";

const Web = () => {
  const photos = [
    "/assets/uploads/1magic-hour.png",
    "/assets/uploads/2bonsai-property-care.png",
    "/assets/uploads/3chad-gpt.png",
    "/assets/uploads/4study-buddy.png",
    "/assets/uploads/5oriole.png",
    "/assets/uploads/6party.png",
    "/assets/uploads/7beautiful.png",
    "/assets/uploads/8wordle.png",
  ];
  const projects = [
    {
      link: "https://magichourportraits.com/",
      git: "https://github.com/ethanbonsall/Magic-Hour-Portraits",
      description:
        "A full-stack website built for a photography business. The frontend is developed with Next.js and Tailwind CSS, and deployed via Vercel. The backend is powered by Supabase, serving as both the database and API layer, enabling seamless data retrieval and submission",
    },
    {
      link: "https://bonsaipropertycare.com/",
      git: "https://github.com/ethanbonsall/bonsai-property-care",
      description:
        "A full-stack website built for a property care business. The frontend is developed with Next.js and Tailwind CSS, and deployed via Vercel. The backend is powered by Supabase, serving as both the database and API layer, enabling seamless data retrieval and submission",
    },
    {
      git: "https://github.com/comp423-25s/csxl-a2",
      description:
        "A chatbot developed for the UNC Computer Science website, built with Angular. Integrates ChatGPT to interpret user input and convert it into API requests, enabling users to check class availability, reserve study rooms, and schedule time with TAs.",
    },
    {
      link: "https://pediatricbluebook.com",
      git: "https://github.com/ethanbonsall/Pediatric-Blue-Book",
      description:
        "A web app for dietitians to calculate patient nutrient needs and create formula recipes that meet those requirements. Built with Next.js and TypeScript, using Supabase to manage user profiles, saved recipes, nutrient data, and weight benchmarks.",
    },
    {
      link: "https://study-buddy-center.vercel.app/login",
      git: "https://github.com/ethanbonsall/study-buddy",
      description:
        "An all-in-one study platform similar to Discord but designed for school, featuring shared notes, live collaborative documents, study channels, and virtual study rooms. Built with Next.js, Supabase, and Supabase Realtime for real-time collaboration. Contact me if you’d like to see a demo.",
    },
    {
      link: "https://www.ethanbonsall.com/birthday",
      git: "https://github.com/ethanbonsall/ethanbonsall-portfolio",
      description:
        "A birthday celebration website with RSVP submissions, photo uploads, and a shared Spotify playlist. Built with a Next.js frontend styled with Tailwind, and a Supabase backend integrating the Spotify API. Supabase for database and file storage.",
    },

    {
      link: "https://beautiful-together-next.vercel.app/tinder-page",
      git: "https://github.com/cssgunc/beautiful-together-next",
      description:
        "A website built for the animal sanctuary Beautiful Together, React frontend and Supabase backend. Includes a Tinder-like interface to streamline pet adoption. Contributed to preferences, pet ranking system, and design of animal profile cards.",
    },
    {
      link: "https://not-wordle-mu.vercel.app/",
      git: "/https://github.com/ethanbonsall/not-wordle",
      description:
        "A Wordle clone built with React and styled using Tailwind CSS.",
    },
  ];

  const mainProjects = [0, 1, 2, 3];
  const minorProjects = [4, 5, 6, 7];
  const normalPhotos = mainProjects.map((i) => photos[i]);
  const normalProjects = mainProjects.map((i) => projects[i]);
  const reversedPhotos = minorProjects.map((i) => photos[i]);
  const reversedProjects = minorProjects.map((i) => projects[i]);
  return (
    <section
      className="bg-background text-text z-0 px-5 py-4 w-[100%] mt-5 min-h-screen mb-10 scroll-mt-28"
      id="projects"
    >
      <h1 className="text-5xl 2xl:text-6xl z-0 font-bold">Projects</h1>
      <hr className="border-accent z-0 mt-6 mb-12" />

      <div className="grid mb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-10 relative">
        {normalPhotos.map((photo, index) => (
          <div
            key={index}
            className="group relative rounded-xl w-full transition-transform duration-300 hover:rounded-t-xl hover:rounded-b-none overflow-visible"
          >
            <div className="relative z-0 group-hover:z-10 group-hover:scale-105 transition-transform duration-300">
              <a
                href={normalProjects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none"
              >
                <img
                  src={photo}
                  alt={`Project ${index}`}
                  className="w-full h-auto object-cover rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none"
                />
              </a>
            </div>

            <div className="absolute left-0 right-0 w-full top-full z-50 opacity-0 group-hover:scale-105 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-0 group-hover:translate-y-2">
              <div className="bg-primary w-full text-reverse text-sm flex justify-between items-center rounded-b-xl p-2 shadow-xl">
                <div className="whitespace-pre-wrap text-left flex-1 mr-2">
                  {normalProjects[index].description
                    .split("\n")
                    .map((line, i) => {
                      return (
                        <div className="w-full" key={i}>
                          {line}
                        </div>
                      );
                    })}
                </div>
                <a
                  href={normalProjects[index].git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubLogo.src}
                    alt="GitHub"
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 relative">
        {reversedPhotos.slice(0, 8).map((photo, index) => (
          <div
            key={index}
            className="group relative rounded-xl w-full transition-transform duration-300 hover:rounded-t-xl hover:rounded-b-none overflow-visible"
          >
            <div className="relative z-0 group-hover:z-10 group-hover:scale-105 transition-transform duration-300">
              <a
                href={reversedProjects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none"
              >
                <img
                  src={photo}
                  alt={`Project ${index}`}
                  className="w-full h-auto object-cover rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none"
                />
              </a>
            </div>

            <div className="absolute left-0 right-0 w-full top-full z-50 opacity-0 group-hover:scale-105 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-0 group-hover:translate-y-2">
              <div className="bg-primary w-full text-reverse text-sm flex justify-between items-center rounded-b-xl p-2 shadow-xl">
                <div className="whitespace-pre-wrap text-left flex-1 mr-2">
                  {reversedProjects[index].description
                    .split("\n")
                    .map((line, i) => {
                      return (
                        <div className="w-full" key={i}>
                          {line}
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
                    src={githubLogo.src}
                    alt="GitHub"
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Web;
