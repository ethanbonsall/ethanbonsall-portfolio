import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Users } from "lucide-react";

const Experience = () => {
  const [durations, setDurations] = useState({
    sheetz: "",
    freelance: "",
    bciResearch: "",
    cssg: "",
  });

  const getDuration = (startDate: Date, endDate: Date = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
    const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

    return [yearStr, monthStr].filter(Boolean).join(" ");
  };

  useEffect(() => {
    setDurations({
      sheetz: getDuration(new Date("2025-08-01"), new Date("2026-02-01")),
      cssg: getDuration(new Date("2024-08-01"), new Date("2025-05-01")),
      freelance: getDuration(new Date("2023-07-01")),
      bciResearch: getDuration(new Date("2026-02-01")),
    });
  }, []);

  return (
    <section
      className="bg-background text-text px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 md:py-16 w-full max-w-full overflow-hidden scroll-mt-24"
      id="experience"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4">
        <span className="gradient-text">Experience</span>
      </h1>

      <div className="relative border-l-2 md:border-l-4 border-primary pl-4 md:pl-6 ml-2 space-y-6 md:space-y-10 w-full max-w-full">
        {/* Research Software Engineer - BCI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full"
        >
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <Code className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words">
              Research Software Engineer
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-medium">
            Brain-Computer Interface Research Lab (Dr. Raghavendra Pradyumna
            Pothukuchi)
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2">
            <span>Feb 2026 – Present</span>
            <span className="bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
              {durations.bciResearch}
            </span>
          </div>
          <ul className="list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
            <li>
              Writing robust data pipelines and automated tests to validate and
              interpret experimental signals for a first-of-its-kind
              brain-computer interface platform.
            </li>
            <li>
              Building tooling to help standardize analysis workflows and
              improve reliability across datasets, with the goal of enabling an
              “Arduino-like” foundation for labs nationwide.
            </li>
            <li className="font-semibold text-primary mt-2 break-words">
              Skills: Python, Data Pipelines, Testing, Data Validation
            </li>
          </ul>
        </motion.div>

        {/* Sheetz - condensed to one role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full"
        >
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words">
              Sheetz
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-medium">
            Associate Software Engineer Intern
            <span className="text-text/70"> • Pittsburgh, PA (remote)</span>
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2">
            <span>May 2025 – Feb 2026</span>
            <span className="bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
              {durations.sheetz}
            </span>
          </div>
          <ul className="list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
            <li>
              Improved data quality across more than 2,000 database tables by
              identifying and removing corrupted or incomplete records and using
              AI-assisted documentation to enhance data discoverability
              company-wide.
            </li>
            <li>
              Built an automated CI/CD Python job that runs after each pull
              request to validate data integrity and ensure long-term
              reliability across production releases.
            </li>
            <li>
              Redesigned and optimized data pipelines to eliminate duplication,
              improve analytics accuracy, and strengthen insights.
            </li>
            <li>
              Collaborated in an Agile environment, performing peer code reviews
              and maintaining best practices for scalable, maintainable data
              solutions.
            </li>
            <li>
              Asked to return part-time following successful internship term.
            </li>
            <li className="font-semibold text-primary mt-2 break-words">
              Skills: Python, SQL, Databricks, Git, AWS, Tableau, Power BI
            </li>
          </ul>
        </motion.div>

        {/* Computer Science and Social Good */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full"
        >
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words">
              Computer Science and Social Good
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-medium">
            Project Manager
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2">
            <span>Aug 2024 – May 2025</span>
            <span className="bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
              {durations.cssg}
            </span>
          </div>
          <ul className="list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
            <li>
              Led a team of 8 developers to deliver a pet-matching web app for a
              nonprofit, managing sprints, stakeholders, and technical
              decisions.
            </li>
            <li>
              Built the web scraping pipeline and matching engine, increasing
              adoption engagement.
            </li>
            <li className="font-semibold text-primary mt-2 break-words">
              Skills: Leadership, Sprint Planning, Stakeholder Management, Web
              Scraping
            </li>
          </ul>
        </motion.div>

        {/* Freelance Software Developer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 w-full max-w-full"
        >
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -left-[1.15rem] md:-left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <Code className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary break-words">
              Freelance Software Developer
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2">
            <span>Jul 2023 – Present</span>
            <span className="bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
              {durations.freelance}
            </span>
          </div>

          {/* Bonsai Property Care */}
          <div className="mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words">
              Bonsai Property Care
            </h3>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
              <li>
                Designed and deployed a full-stack property care platform using
                TypeScript, Next.js, and Tailwind CSS with appointment
                scheduling, responsive design, and SEO optimization.
              </li>
              <li className="font-semibold text-primary mt-2 break-words">
                Skills: TypeScript, Next.js, Tailwind CSS, Project Planning
              </li>
            </ul>
          </div>

          {/* Magic Hour Portraits */}
          <div className="mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words">
              Magic Hour Portraits
            </h3>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
              <li>
                Built a full-stack photography portfolio website with admin
                tools for uploading projects and managing blog posts.
              </li>
              <li className="font-semibold text-primary mt-2 break-words">
                Skills: TypeScript, Next.js, Tailwind CSS, API Development
              </li>
            </ul>
          </div>

          {/* Pediatric Blue Book */}
          <div className="mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words">
              Pediatric Blue Book
            </h3>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
              <li>
                Partnered with pediatric dieticians to create a HIPAA-compliant
                Next.js platform that replaces manual nutrient math with
                automated calculations and database-powered formula building.
              </li>
              <li>
                Designed secure PostgreSQL workflows that deliver ideal nutrient
                targets, printable formula plans, and rapid access to formulas,
                greatly simplifying dietician decision-making.
              </li>
              <li className="font-semibold text-primary mt-2 break-words">
                Skills: TypeScript, Next.js, PostgreSQL, Data Security, Client
                Communication
              </li>
            </ul>
          </div>

          {/* Postprofundus */}
          <div className="mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words">
              Postprofundus
            </h3>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
              <li>
                A designer and lifestyle website built for a client, featuring
                immersive 3D renderings and a fully integrated online shop for
                apparel purchases.
              </li>
              <li>
                The frontend is developed with Next.js, React, Three.js, and
                TypeScript, delivering an interactive, performance-optimized
                experience.
              </li>
              <li className="font-semibold text-primary mt-2 break-words">
                Skills: Next.js, React, Three.js, TypeScript, E-commerce
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
