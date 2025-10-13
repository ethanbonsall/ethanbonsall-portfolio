import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, MonitorSmartphone } from "lucide-react";

const Experience = () => {
  const [durations, setDurations] = useState({
    sheetzDev: "",
    sheetzIntern: "",
    freelance: "",
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
      sheetzDev: getDuration(new Date("2025-08-01")),
      sheetzIntern: getDuration(new Date("2025-05-01"), new Date("2025-08-01")),
      freelance: getDuration(new Date("2023-07-01")),
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
      <p className="text-text/70 text-base sm:text-lg md:text-xl mb-8 md:mb-12">My professional journey</p>

      <div className="relative border-l-2 md:border-l-4 border-primary pl-4 md:pl-6 ml-2 space-y-6 md:space-y-10 w-full max-w-full">
        {/* Sheetz - Associate Software Developer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            Associate Software Developer
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2">
            <span>Aug 2025 – Present</span>
            <span className="bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
              {durations.sheetzDev}
            </span>
          </div>
          <ul className="list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
            <li>
              Improved data quality across more than 2,000 database tables by identifying and removing corrupted or incomplete records and using AI-assisted documentation to enhance data discoverability company-wide.
            </li>
            <li>
              Built an automated Python QA framework that runs after each pull request to validate data integrity and ensure long-term reliability across production releases.
            </li>
            <li>
              Redesigned and optimized data pipelines to eliminate duplication, improve analytics accuracy, and strengthen business insights.
            </li>
            <li>
              Collaborated in an Agile environment, performing peer code reviews and maintaining best practices for scalable, maintainable data solutions.
            </li>
            <li>
              Partnered with cross-functional teams to standardize validation procedures and documentation, reducing data incidents and improving accessibility.
            </li>
            <li className="font-semibold text-primary mt-2 break-words">Skills: Python, SQL, Databricks, Git, Agile Development</li>
          </ul>
        </motion.div>

        {/* Sheetz - Associate Software Developer Intern */}
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
            Associate Software Developer Intern
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mt-2">
            <span>May 2025 – Aug 2025</span>
            <span className="bg-primary text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap">
              {durations.sheetzIntern}
            </span>
          </div>
          <ul className="list-disc pl-4 sm:pl-5 mt-3 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
            <li>
              Automated SQL/Python scripts to validate pipelines and enforce enterprise data quality standards.
            </li>
            <li>
              Optimized analytics workflows and improved data reliability across multiple business domains.
            </li>
            <li className="font-semibold text-primary mt-2 break-words">Skills: SQL, Python, Databricks</li>
          </ul>
        </motion.div>

        {/* Freelance Software Developer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
          <div className="mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words">Bonsai Property Care</h3>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
              <li>
                Designed and deployed a full-stack property care platform using TypeScript, Next.js, and Tailwind CSS with appointment scheduling, responsive design, and SEO optimization.
              </li>
              <li className="font-semibold text-primary mt-2 break-words">Skills: TypeScript, Next.js, Tailwind CSS, Project Planning</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary/80 mb-2 break-words">Magic Hour Portraits</h3>
            <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base md:text-lg text-text/80 space-y-1 md:space-y-2">
              <li>
                Built a full-stack photography portfolio website with admin tools for uploading projects and managing blog posts.
              </li>
              <li className="font-semibold text-primary mt-2 break-words">Skills: TypeScript, Next.js, Tailwind CSS, API Development</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
