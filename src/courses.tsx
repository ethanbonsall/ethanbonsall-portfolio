import { useEffect, useState } from "react";

const Courses = () => {
    const courses = [
        { name: "Foundations of Programming", description: "Learned how to reason about how my code is structured, identify whether a given structure is effective in a given context, and look at ways of organizing units of code that support larger programs." },
        { name: "Computer Organization", description: "Learned the fundamentals of computer hardware design, transistors and logic gates, progressing through basic combinational and sequential components, culminating in the conceptual design CPU." },
        { name: "Modern Web Programming", description: "Developing applications for the World Wide Web including both client-side and server-side programming. Emphasis on Model-View-Controller architecture, AJAX, RESTful Web services, and database interaction." },
        { name: "Foundations of Software Engineering", description: "Learned how to set up a Python Dev Container in VS Code, create a GitHub-hosted static site with Material for MkDocs, and deploy it using GitHub Actions, gaining insight into open-source tools and workflows." },
        { name: "Introduction to Probability", description: "Learned the mathematical theory of probability covering random variables; moments; binomial, Poisson, and normal distributions; generating functions; sums of random variables; and statistical applications." },
        { name: "Discrete Mathematics", description: "Learned the foundations of mathematics: logic, set theory, relations and functions, induction, permutations and combinations, recurrence." },
        { name: "Linear Algebra", description: "Algebra of matrices with applications: determinants, solution of linear systems by Gaussian elimination, Gram-Schmidt procedure, and eigenvalues." },
    ];

    interface Course {
        name: string;
        description: string;
    }

    const CourseList = ({ courses }: { courses: Course[] }) => {
        const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
            const mediaQuery = window.matchMedia("(max-aspect-ratio: 1/1)");
            setIsMobile(mediaQuery.matches);

            const updateAspectRatio = () => setIsMobile(mediaQuery.matches);
            mediaQuery.addEventListener("change", updateAspectRatio);

            return () => mediaQuery.removeEventListener("change", updateAspectRatio);
        }, []);

        return (
            <div className="flex justify-center items-center w-[94.3%] gap-3 px-4 pb-4 pt-2">
                {courses.map((course, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={index}
                            className={`relative flex flex-col justify-center items-center text-center border-1
                                        bg-[#d8c4b6] text-[#213555] rounded-xl transition-all duration-700 ease-in-out
                                        flex-1 min-w-0 max-w-500 aspect-[7/3] will-change-transform p-2 overflow-hidden
                            ${isMobile ? (isHovered ? "flex-[1.5] scale-105" : "flex-[0.5] scale-100") : (isHovered ? "flex-[1.5] scale-105" : "flex-[1] scale-100")}`}
                            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <h3 className={`text-[min(1rem,1.5vw)] font-semibold transition-all duration-500 ease-in-out ${isHovered ? "scale-100" : "scale-50"}`}>
                                {course.name}
                            </h3>

                            <p
                                className={`text-[#213555] mt-2 transition-all ease-in-out text-sm
                                ${isHovered ? "opacity-100 translate-y-0 scale-100 max-h-[100px] duration-700 overflow-visible" : "opacity-0 translate-y-2 scale-90 max-h-0 duration-500 overflow-hidden"}`}
                            >
                                {course.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return <CourseList courses={courses} />;
};

export default Courses;
