/* eslint-disable @next/next/no-img-element */
import githubLogo from "@/public/assets/logos/github-logo-alt.png";

const Web = () => {
  const photos = [
    "/assets/uploads/1magic-hour.png",
    "/assets/uploads/2bonsai-property-care.png",
    "/assets/uploads/3chad-gpt.png",
    "/assets/uploads/4pbb.png",
    "/assets/uploads/5study-buddy.png",
    "/assets/uploads/6party.png",
    "/assets/uploads/7beautiful.png",
    "/assets/uploads/8wordle.png",
  ];
  const projects = [
    {
      name: "Magic Hour Portraits",
      link: "https://magichourportraits.com/",
      git: "https://github.com/ethanbonsall/Magic-Hour-Portraits",
      description:
        "A full-stack website built for a photography business. The frontend is developed with Next.js and Tailwind CSS, and deployed via Vercel. The backend is powered by Supabase, serving as both the database and API layer, enabling seamless data retrieval and submission",
    },
    {
      name: "Bonsai Property Care",
      link: "https://bonsaipropertycare.com/",
      git: "https://github.com/ethanbonsall/bonsai-property-care",
      description:
        "A full-stack website built for a property care business. The frontend is developed with Next.js and Tailwind CSS, and deployed via Vercel. The backend is powered by Supabase, serving as both the database and API layer, enabling seamless data retrieval and submission",
    },
    {
      name: "Chad GPT",
      git: "https://github.com/comp423-25s/csxl-a2",
      description:
        "A chatbot developed for the UNC Computer Science website, built with Angular. Integrates ChatGPT to interpret user input and convert it into API requests, enabling users to check class availability, reserve study rooms, and schedule time with TAs.",
    },
    {
      name: "Pediatric Blue Book",
      link: "https://pediatricbluebook.com",
      git: "https://github.com/ethanbonsall/Pediatric-Blue-Book",
      description:
        "A web app for dietitians to calculate patient nutrient needs and create formula recipes that meet those requirements. Built with Next.js and TypeScript, using Supabase to manage user profiles, saved recipes, nutrient data, and weight benchmarks.",
    },
    {
      name: "Study Buddy",
      link: "https://study-buddy-center.vercel.app/login",
      git: "https://github.com/ethanbonsall/study-buddy",
      description:
        "An all-in-one study platform similar to Discord but designed for school, featuring shared notes, live collaborative documents, study channels, and virtual study rooms. Built with Next.js, Supabase, and Supabase Realtime for real-time collaboration. Contact me if you’d like to see a demo.",
    },
    {
      name: "Ethan's Birthday",
      link: "https://www.ethanbonsall.com/birthday",
      git: "https://github.com/ethanbonsall/ethanbonsall-portfolio",
      description:
        "A birthday celebration website with RSVP submissions, photo uploads, and a shared Spotify playlist. Built with a Next.js frontend styled with Tailwind, and a Supabase backend integrating the Spotify API. Supabase for database and file storage.",
    },

    {
      name: "Beautiful Together",
      link: "https://beautiful-together-next.vercel.app/tinder-page",
      git: "https://github.com/cssgunc/beautiful-together-next",
      description:
        "A website built for the animal sanctuary Beautiful Together, React frontend and Supabase backend. Includes a Tinder-like interface to streamline pet adoption. Contributed to preferences, pet ranking system, and design of animal profile cards.",
    },
    {
      name: "Not Wordle",
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
      className="bg-background text-text z-0 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 w-full max-w-full overflow-hidden scroll-mt-28"
      id="projects"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl z-0 font-bold mb-4">
        <span className="gradient-text">Recent Projects</span>
      </h1>
      
      <div className="grid mb-8 grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full">
        {normalPhotos.map((photo, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <a
                href={normalProjects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo}
                    alt={`Project ${index}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-primary">{normalProjects[index].name}</h3>
                <a
                  href={normalProjects[index].git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={githubLogo.src}
                    alt="GitHub"
                    className="w-6 h-6 bg-white rounded-full"
                  />
                </a>
              </div>
              <p className="text-text/80 text-sm leading-relaxed">
                {normalProjects[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {reversedPhotos.slice(0, 8).map((photo, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <a
                href={reversedProjects[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo}
                    alt={`Project ${index}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold text-primary">reversedProjects[index].name</h3>
                <a
                  href={reversedProjects[index].git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={githubLogo.src}
                    alt="GitHub"
                    className="w-5 h-5 bg-white rounded-full"
                  />
                </a>
              </div>
              <p className="text-text/80 text-xs leading-relaxed line-clamp-3">
                {reversedProjects[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Web;
