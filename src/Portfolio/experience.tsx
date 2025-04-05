const Experience = () => {
  return (
    <section className="bg-[#d8c4b6] text-[#213555] rounded-xl p-5 w-[93%] my-2 border-2">
      <h1 className="text-4xl font-bold">Experience</h1>
      <hr className="border-black my-2" />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Sheetz</h2>
        <p className="text-lg font-medium italic">
          Associate Programmer Intern
        </p>
        <p className="text-md">Apr 2025 – Present · 1 mo</p>
        <p className="text-sm">Internship</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Sheetz</h2>
        <p className="text-lg font-medium italic">Sales</p>
        <p className="text-md">Mar 2021 – Apr 2025 · 4 yrs 2 mos</p>
        <p className="text-sm">Part-time · Camp Hill, Pennsylvania</p>
        <ul className="list-disc pl-5 mt-1 text-md">
          <li>Made specialty drinks and food to order</li>
          <li>Operated the cash register</li>
          <li>Cleaned restaurant (sweeping, bathrooms, dishes, etc.)</li>
          <li>Provided friendly customer service</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">UNC CS + Social Good</h2>
        <p className="text-lg font-medium italic">Frontend Developer</p>
        <p className="text-md">Sep 2024 – Present · 8 mos</p>
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
        <p className="text-md">Jul 2023 – Present · 1 yr 10 mos</p>
        <p className="text-sm">Contract · Remote · Camp Hill, Pennsylvania</p>
        <ul className="list-disc pl-5 mt-1 text-md">
          <li>Built and maintained website using React and Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
};
export default Experience;
