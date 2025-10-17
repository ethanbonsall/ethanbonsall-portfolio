/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import linkedinLogo from "@/public/assets/logos/linkedin-logo.jpeg";
import githubLogo from "@/public/assets/logos/github-logo.png";
import Logo from "@/components/nameLogo";
import clsx from "clsx";
import { GraduationCap, FolderKanban, Briefcase, Download } from "lucide-react";

const sections = ["education", "projects", "experience"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

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
      
      // Calculate scroll progress (0 to 1, maxing at 300px scroll)
      const maxScroll = 300;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate dynamic values based on scroll progress (only for desktop)
  const topOffset = isMobile ? 0 : scrollProgress * 24; // 0px to 24px
  const width = isMobile ? 100 : 100 - (scrollProgress * 10); // 100% to 90%
  const borderRadius = isMobile ? 0 : scrollProgress * 9999; // 0 to fully rounded
  const horizontalPadding = isMobile ? 5 : 5 - (scrollProgress * 3); // 5% to 2%
  const showGlow = !isMobile && scrollProgress > 0.3;

  return (
    <nav 
      className="sticky z-50  w-full transition-all duration-300 ease-out flex justify-center"
      style={{
        top: `${topOffset}px`
      }}
    >
      <div 
        className={clsx(
          "flex-row justify-between items-between text-text transition-all duration-300 ease-out backdrop-blur-md",
          showGlow && "navbar-pill-glow",
          isMobile 
            ? "w-full bg-background/80 border-b border-primary/20"
            : "bg-background/90 border border-primary/40"
        )}
        style={{
          width: `${width}%`,
          borderRadius: `${borderRadius}px`,
          paddingLeft: isMobile ? undefined : `${horizontalPadding}%`,
          paddingRight: isMobile ? undefined : `${horizontalPadding}%`,
          paddingTop: isMobile ? undefined : `${8 + scrollProgress * 4}px`,
          paddingBottom: isMobile ? undefined : `${8 + scrollProgress * 4}px`,
        }}
      >
        <div className={clsx(
          "flex max-w-full  justify-between items-center transition-all duration-300",
          isMobile ? "px-[5%]" : ""
        )}>
          <div 
            className={clsx(
              "flex items-center transition-all duration-300",
              isMobile && "gap-4 sm:gap-x-12"
            )}
            style={{
              gap: isMobile ? undefined : `${48 - scrollProgress * 32}px`
            }}
          >
            <div 
              className="transition-all duration-300"
              style={{
                transform: isMobile ? undefined : `scale(${1 - scrollProgress * 0.25})`
              }}
            >
              <Logo />
            </div>
            {sections.map((section) => (
              <a key={section} href={`#${section}`}>
                <div className="flex items-center justify-center">
                  <span className="md:hidden">
                    {section === "education" && (
                      <GraduationCap className="w-6 h-6" />
                    )}
                    {section === "projects" && (
                      <FolderKanban className="w-6 h-6" />
                    )}
                    {section === "experience" && (
                      <Briefcase className="w-6 h-6" />
                    )}
                  </span>

                  <span
                    className={clsx(
                      "hidden md:inline nav-link relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 transition-all duration-300",
                      isMobile && "md:text-4xl",
                      activeSection === section
                        ? "after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    )}
                    style={{
                      fontSize: isMobile ? undefined : `${2.25 - scrollProgress * 0.75}rem`
                    }}
                  >
                    <div className="hidden md:inline">{section}</div>
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div 
            className={clsx(
              "flex items-center transition-all duration-300",
              isMobile && "gap-1 md:gap-4"
            )}
            style={{
              gap: isMobile ? undefined : `${16 - scrollProgress * 8}px`
            }}
          >
            <a
              href="/Ethan-Bonsall-Resume.pdf"
              download
              className={clsx(
                "flex border-2 border-primary justify-center items-center text-center justify-items-center hover:bg-primary/20 rounded-full transition-all duration-300",
                isMobile && "w-10 h-10 md:w-14 md:h-14"
              )}
              style={{
                width: isMobile ? undefined : `${56 - scrollProgress * 16}px`,
                height: isMobile ? undefined : `${56 - scrollProgress * 16}px`,
              }}
            >
              <Download
                className={clsx(
                  "text-primary justify-center text-center items-center transition-all",
                  isMobile && "w-5 h-5 md:w-7 md:h-7"
                )}
                style={{
                  width: isMobile ? undefined : `${28 - scrollProgress * 8}px`,
                  height: isMobile ? undefined : `${28 - scrollProgress * 8}px`,
                }}
              />
            </a>
            
            <a
              href="https://www.linkedin.com/in/ethanbonsall/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo.src}
                alt="LinkedIn"
                className={clsx(
                  "image-hover h-auto transition-all duration-300",
                  isMobile && "w-16 md:w-24"
                )}
                style={{
                  width: isMobile ? undefined : `${96 - scrollProgress * 48}px`
                }}
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
                className={clsx(
                  "image-hover h-auto rounded-full transition-all duration-300 z-50",
                  isMobile && "w-8 md:w-14"
                )}
                style={{
                  width: isMobile ? undefined : `${56 - scrollProgress * 28}px`
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
