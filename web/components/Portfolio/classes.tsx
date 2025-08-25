const Courses = () => {
  const courses = [
    {
      name: "Foundations of Programming",
      description:
        "Learned how to reason about how my code is structured, identify whether a given structure is effective in a given context, and look at ways of organizing units of code that support larger programs.",
    },
    {
      name: "Modern Web Programming",
      description:
        "Built full-stack web apps using Next.js, TypeScript, and Tailwind CSS. Gained hands-on experience with frontend and backend development, deploying multiple websites from scratch or starter code, and learning scalable web architecture and responsive design.",
    },
    {
      name: "Foundations of Software Engineering",
      description:
        "Completed multiple software projects in an Agile environment, learning collaboration, version control, testing, and software design principles. Gained experience with team workflows, coding standards, and writing maintainable, well-documented code.",
    },
    {
      name: "Software Engineering Lab",
      description:
        "Collaborated with a company to design, build, and deliver a complete software product. Gained experience in requirement analysis, architecture design, implementation, testing, deployment, and stakeholder communication.",
    },
    {
      name: "Mobile Computing Systems",
      description:
        "Developed Android apps using Java in Android Studio, gaining experience with UI design, activity lifecycle, data storage, API integration, and debugging. Completed multiple projects emphasizing collaboration, agile workflows, and user-friendly app development.",
    },
  ];

  type Course = {
    name: string;
    description: string;
  };

  const CourseList = ({ courses }: { courses: Course[] }) => {
    return (
      <div className="pb-28 bg-secondary w-full  ">
        <div className="w-full bg-secondary overflow-x-auto py-6 px-4 custom-scrollbar ">
          <div className="flex overflow-y-visible space-x-4 w-fit mx-auto ">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-primary text-text rounded-xl pb-1 pt-4 px-4 md:p-4 lg:p-6 w-[80vw] md:w-[350px] 2xl:w-[400px] shadow-lg transition-transform hover:scale-105"
              >
                <h3 className="text-reverse font-bold text-3xl 2xl:text-4xl mb-4">
                  {course.name}
                </h3>
                <p className="text-reverse text-xl 2xl:text-2xl">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return <CourseList courses={courses} />;
};

export default Courses;
