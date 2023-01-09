import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill, Skill as SkillType } from "../types";

type Props = {
  skills: SkillType[];
};

export function Skills({ skills }: Props) {
  return (
    <div
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px]
     xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currently proficency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill directionLeft key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

type SkillProps = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale
        transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
}
