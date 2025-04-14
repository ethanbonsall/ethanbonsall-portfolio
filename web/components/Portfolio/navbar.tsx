/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import linkedinLogo from "@/assets/linkedin-logo.jpeg";
import githubLogo from "@/assets/github-logo.png";
import ThemeToggle from "@/components/toggle";
import Logo from "@/components/nameLogo";
import clsx from "clsx";

const sections = ["education", "projects", "experience"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 300;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex-col sticky top-0 z-50 shadow w-full">
      <div className="flex justify-between items-between text-text">
        <div className="flex bg-secondary w-full justify-between items-center px-[5%]">
          <div className="flex gap-x-16 items-center">
            <Logo />
            {sections.map((section) => (
              <a key={section} href={`#${section}`}>
                <span
                  className={clsx(
                    "text-4xl nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300",
                    activeSection === section
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {section}
                </span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://www.linkedin.com/in/ethanbonsall/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo.src}
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
                src={githubLogo.src}
                alt="GitHub"
                className="image-hover w-14 h-auto rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
