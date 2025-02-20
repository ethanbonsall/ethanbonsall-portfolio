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
            const checkAspectRatio = () => {
                setTimeout(() => {
                    setIsMobile(window.innerWidth / window.innerHeight < 1);
                }, 50);
            };
    
            checkAspectRatio();
            window.addEventListener("resize", checkAspectRatio);
            return () => window.removeEventListener("resize", checkAspectRatio);
        }, []);
    
        return (
            <div className="flex justify-center items-center w-[94.3%] gap-3 px-4 pb-4 pt-2">
                {courses.map((course, index) => {
                    const isHovered = hoveredIndex === index;
                    return (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center text-center border-1
                                        bg-[#d8c4b6] text-[#213555] rounded-xl transition-all duration-700 ease-in-out
                                        flex-1 min-w-0 max-w-500 will-change-transform px-3 py-1.5 overflow-hidden
                            ${isMobile ? (isHovered ? "flex-[2] scale-100 aspect-[36/25] justify-center" : "flex-[0.35] scale-100 aspect-[36/25] justify-center") : (isHovered ? "flex-[1.5] scale-105 aspect-[6/3] justify-center" : "flex-[0.5] scale-100 aspect-[6/3] justify-center")}`}
                            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
                            onMouseEnter={() =>  setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null) }
                        >
                            <h3
    className={`text-[#213555] font-semibold transition-all duration-500 ease-in-out 
        ${hoveredIndex !== null ? (isHovered ? "underline" : "") : ""}`}
    style={{
        fontSize: hoveredIndex !== null
            ? (isHovered ? "clamp(1rem, 1.2vw, 1.6rem)" : "clamp(0.6rem, 0.8vw, 1rem)")
            : "min(1.4rem,1.8vw)",
    }}
>
    {course.name}
</h3>
    
                            <p
    className={`text-[#213555] transition-all ease-in-out 
    ${isHovered ? "opacity-100 translate-y-0 scale-100 max-h-[120px] duration-700 overflow-visible mt-3" : "opacity-0 translate-y-2 scale-90 max-h-0 duration-500 overflow-hidden"}`}
    style={{
        fontSize: "clamp(1rem, 1vw, 1.6rem)", // Ensures text grows properly
        maxWidth: "90%", // Prevents tiny text inside a massive box
        
    }}
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
