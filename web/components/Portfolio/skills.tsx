/* eslint-disable @next/next/no-img-element */
import java from "@/public/assets/java.png";
import python from "@/public/assets/python.png";
import javascript from "@/public/assets/javaScript.png";
import typescript from "@/public/assets/typeScript.png";
import cpp from "@/public/assets/cpp.png";
import sql from "@/public/assets/sql.png";
import react from "@/public/assets/react-1.svg";
import angular from "@/public/assets/angular.png";
import expressjs from "@/public/assets/expressjs.png";
import nextjs from "@/public/assets/nextjs.png";
import pandas from "@/public/assets/pandas.svg";
import postgres from "@/public/assets/postgres.png";
import supabase from "@/public/assets/supabase.jpg";
import tableau from "@/public/assets/tableau.png";
import tensorflow from "@/public/assets/tensorflow.png";
import css from "@/public/assets/css.svg";
import html from "@/public/assets/html.png";
const Skills = () => {
  return (
    <section className="bg-background text-text p-5 2xl:p-8 w-full my-2">
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold mb-4">
        Skills & Technologies
      </h1>
      <hr className="border-accent my-2" />

      {/* Programming Languages */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="underline text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl pb-4 font-semibold">
          Programming Languages
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={java.src}
              alt="Java"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={python.src}
              alt="Python"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={javascript.src}
              alt="JavaScript"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={typescript.src}
              alt="TypeScript"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={cpp.src}
              alt="C++"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={sql.src}
              alt="SQL"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="flex flex-col items-center justify-center mt-6">
        <h2 className="underline text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl pb-4 font-semibold">
          Frameworks & Libraries
        </h2>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={react.src}
              alt="React"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={nextjs.src}
              alt="Next.js"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2 bg-[#ebf0ee]"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={angular.src}
              alt="Angular"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={supabase.src}
              alt="Supabase"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={tensorflow.src}
              alt="TensorFlow"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={expressjs.src}
              alt="Express.js"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={postgres.src}
              alt="PostgreSQL"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={pandas.src}
              alt="Pandas"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2 bg-[#ebf0ee]"
            />
          </div>
        </div>
      </div>

      {/* Tools, Platforms & Others */}
      <div className="flex-column items-center justify-center justify-items-center mt-6">
        <h2 className="underline text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl pb-4 font-semibold">
          Tools, Platforms & Others
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={tableau.src}
              alt="Tableau"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={css.src}
              alt="CSS"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={html.src}
              alt="HTML"
              className="w-16 md:w-24 lg:w-28 2xl:w-32 h-auto m-2 bg-[#ebf0ee] p-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
