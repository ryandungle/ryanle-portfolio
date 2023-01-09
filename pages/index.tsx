import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WorkExperience } from "../components/WorkExperience";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { ContactMe } from "../components/ContactMe";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Skill, Social } from "../types";
import { GetStaticProps } from "next";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  skills: Skill[];
  socials: Social[];
};

export default function Home({ socials, skills }: Props) {
  return (
    <div
      className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden
     scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80
    "
    >
      <Head>
        <title>Ryan's Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="w-12 h-12 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const [skills, socials] = await Promise.all([fetchSkills(), fetchSocials()]);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      skills,
      socials,
    },
    revalidate: 100,
  };
};
