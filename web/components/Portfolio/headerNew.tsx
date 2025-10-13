/* eslint-disable @next/next/no-img-element */
"use client";
import profilePic from "@/public/assets/image.jpeg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [stats, setStats] = useState({ projects: 0, experience: 0, tech: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = { projects: 8, experience: 2, tech: 15 };
    let current = { projects: 0, experience: 0, tech: 0 };

    const timer = setInterval(() => {
      const increment = {
        projects: targets.projects / steps,
        experience: targets.experience / steps,
        tech: targets.tech / steps,
      };

      current = {
        projects: Math.min(current.projects + increment.projects, targets.projects),
        experience: Math.min(current.experience + increment.experience, targets.experience),
        tech: Math.min(current.tech + increment.tech, targets.tech),
      };

      setStats({
        projects: Math.floor(current.projects),
        experience: Math.floor(current.experience),
        tech: Math.floor(current.tech),
      });

      if (
        current.projects >= targets.projects &&
        current.experience >= targets.experience &&
        current.tech >= targets.tech
      ) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-col w-full max-w-full overflow-hidden">
      <div className="flex-col animated-gradient tech-grid w-full text-text pt-[50px] pb-[60px] sm:pb-[80px] md:pt-[75px] md:pb-[90px] xl:pt-[85px] xl:pb-[105px] 2xl:pt-[140px] 2xl:pb-[160px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex items-center text-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={profilePic.src}
              alt="Profile"
              className="relative float-animation items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full border-4 border-primary glow-effect"
            />
          </div>
        </div>
        <div className="flex mt-8 sm:mt-10 md:mt-20 lg:mt-30 2xl:mt-40 items-center justify-center px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80">
          <div className="flex-row items-center text-center justify-items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sans font-extrabold animate-slide-up w-full max-w-full">
            <div className="mb-3 md:mb-4 text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-mono">Software Developer</div>
            <div className="break-words">
              <span className="text-text">Hello I'm </span>
              <span className="gradient-text">Ethan Bonsall</span>
            </div>
            <p className="text-text/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal mt-4 sm:mt-6 max-w-3xl mx-auto break-words px-2">
              Full-Stack Developer | Data Engineer | Building innovative solutions with modern tech
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-8 sm:mt-12 md:mt-20 px-4"
        >
          <div className="glass-card px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-lg md:rounded-xl text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text counter-animate">
              {stats.projects}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-text/70 mt-1 md:mt-2 whitespace-nowrap">Projects</div>
          </div>
          <div className="glass-card px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-lg md:rounded-xl text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text counter-animate">
              {stats.experience}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-text/70 mt-1 md:mt-2 whitespace-nowrap">Years Experience</div>
          </div>
          <div className="glass-card px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 rounded-lg md:rounded-xl text-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text counter-animate">
              {stats.tech}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-text/70 mt-1 md:mt-2 whitespace-nowrap">Technologies</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
