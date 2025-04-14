import { useEffect, useState } from "react";

const Experience = () => {
  const [durations, setDurations] = useState({
    sheetz: "",
    cs: "",
    mhp: "",
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
      sheetz: getDuration(new Date("2025-04-01")),
      cs: getDuration(new Date("2024-09-01")),
      mhp: getDuration(new Date("2023-07-01")),
    });
  }, []);

  return (
    <section
      className="bg-secondary text-text p-5 mt-6 w-[100%] mb-2 scroll-mt-24"
      id="experience"
    >
      <h1 className="text-4xl font-bold">Experience</h1>
      <hr className="border-black my-2" />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Sheetz</h2>
        <p className="text-lg font-medium italic">
          Associate Programmer Intern
        </p>
        <p className="text-md">Apr 2025 – Present · {durations.sheetz}</p>
        <p className="text-sm">Internship</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">UNC CS + Social Good</h2>
        <p className="text-lg font-medium italic">Frontend Developer</p>
        <p className="text-md">Sep 2024 – Present · {durations.cs}</p>
        <p className="text-sm">Internship</p>
        <ul className="list-disc pl-5 mt-1 text-md">
          <li>Developed websites using Supabase, NW.js, and React</li>
          <li>
            Built Tinder-like platform to help an animal sanctuary find homes
            for animals
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Magic Hour Portraits</h2>
        <p className="text-lg font-medium italic">Web Developer</p>
        <p className="text-md">Jul 2023 – Present · {durations.mhp}</p>
        <p className="text-sm">Contract · Remote · Camp Hill, Pennsylvania</p>
        <ul className="list-disc pl-5 mt-1 text-md">
          <li>
            Built and maintained website using React, Tailwind CSS, and NextJS
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
