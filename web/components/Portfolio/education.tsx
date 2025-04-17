const Education = () => {
  return (
    <section
      className="bg-secondary text-text px-5 py-12 md:pb-14 lg:pb-16  w-[100%] scroll-mt-24"
      id="education"
    >
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">Education</h1>
      <hr className="border-accent my-3" />
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold italic my-2">
        University of North Carolina at Chapel Hill
      </h2>
      <p className="text-xl 2xl:text-2xl my-1">Bachelor of Science in Computer Science</p>
      <p className="text-xl 2xl:text-2xl my-1">Expected Graduation: May 2026</p>
      <p className="text-xl 2xl:text-2xl mt-1 font-semibold">GPA: 3.7</p>
    </section>
  );
};
export default Education;
