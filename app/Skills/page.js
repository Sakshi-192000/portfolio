
import React from "react";
import Image from "next/image";
import RN from "../../public/RN.webp";
import SkillsImage from "./SkillsImage";
import nextjs from "../../public/nextjs.png";
import html from "../../public/html.png";
import react from "../../public/react.png";
import tailwind from "../../public/tailwind.png";
import javascript from "../../public/javascript.png";
import github1 from "../../public/github1.png";
import css from "../../public/css.png";

const page = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-semibold tracking-widest uppercase text-rose-600 py-8">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsImage image={html} />
          <SkillsImage image={css} />
          <SkillsImage image={tailwind} />
          <SkillsImage image={javascript} />
          <SkillsImage image={react} />
          <SkillsImage image={RN} />
          <SkillsImage image={nextjs} />
          <SkillsImage image={github1} />
        </div>
      </div>
    </div>
  );
};

export default page;
