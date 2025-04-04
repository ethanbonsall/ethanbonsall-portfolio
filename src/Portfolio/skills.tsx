const Skills = () => {
  return (
    <section className="bg-[#d8c4b6] text-[#213555] rounded-xl p-5 w-[93%] my-2 border-2">
      <h1 className="text-4xl font-bold">Skills & Technologies</h1>
      <hr className="border-black my-2" />

      <h2 className="underline text-2xl font-semibold">
        Programming Languages
      </h2>
      <ul className="list-disc pl-5 text-xl">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>Java</li>
        <li>C++</li>
        <li>Python</li>
      </ul>

      <h2 className="underline text-2xl font-semibold mt-2">
        Frameworks & Libraries
      </h2>
      <ul className="list-disc pl-5 text-xl">
        <li>
          <strong>Frontend:</strong> React, Angular, NextJS
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js
        </li>
        <li>
          <strong>Database:</strong> Supabase, PostgreSQL
        </li>
      </ul>

      <h2 className="underline text-2xl font-semibold mt-2">
        Tools & Platforms
      </h2>
      <ul className="list-disc pl-5 text-xl">
        <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
        <li>Tableau (Data Visualization)</li>
        <li>Git & GitHub (Version Control)</li>
      </ul>

      <h2 className="underline text-2xl font-semibold mt-2">
        Additional Skills
      </h2>
      <ul className="list-disc pl-5 text-xl">
        <li>RESTful API Development</li>
        <li>Machine Learning (scikit-learn, TensorFlow basics)</li>
        <li>Data Analysis & Visualization (Pandas, Matplotlib, Tableau)</li>
      </ul>
    </section>
  );
};
export default Skills;
