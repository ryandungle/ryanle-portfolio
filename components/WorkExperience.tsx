import { motion } from "framer-motion";
import React from "react";

type Props = {};

export function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin
      "
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
     cursor-pointer transition-opacity duration-200 overflow-hidden
    "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Lead developer of USA Dental</h4>
        <p className="font-bold text-2xl mt-1">USA Dental Solutions LLC.</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className=" list-disc space-y-4 ml-5 text-lg">
          <li>
            Sumary points Sumary pointsSumary pointsSumary pointsSumary
            pointsSumary points Sumary pointsSumary pointsSumary pointsSumary
            points
          </li>
          <li>
            Sumary points Sumary pointsSumary pointsSumary pointsSumary
            pointsSumary points Sumary pointsSumary pointsSumary pointsSumary
            points
          </li>
          <li>
            Sumary points Sumary pointsSumary pointsSumary pointsSumary
            pointsSumary points Sumary pointsSumary pointsSumary pointsSumary
            points
          </li>
          <li>
            Sumary points Sumary pointsSumary pointsSumary pointsSumary
            pointsSumary points Sumary pointsSumary pointsSumary pointsSumary
            points
          </li>
          <li>
            Sumary points Sumary pointsSumary pointsSumary pointsSumary
            pointsSumary points Sumary pointsSumary pointsSumary pointsSumary
            points
          </li>
        </ul>
      </div>
    </article>
  );
}
