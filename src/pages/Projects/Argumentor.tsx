import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function Argumentor() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Argumentor"
          image="/projects/debate-research.png"
          subtitle="Using AI to help debaters research and prepare for debates"
          type={{
            title: "Coding",
            color: "bg-black",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col w-full gap-12"
        >
          <div className="flex flex-col w-full ">
            <p className="font-light font-poppins pt-5 pb-10 text-gray-700">
              In October 2023, I developed Argumentor, a web application
              designed to support the UCSD Speech and Debate team, of which I am
              a member. Argumentor was a precursor to tools like Microsoft
              Copilot, providing an innovative way to integrate GPT-3.5 with
              real-time internet access. By leveraging advanced AI capabilities,
              I created a system that could format arguments consistently,
              generate logical reasoning, and include trustworthy sources to
              back up claims.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center">
                  <Skill skill="Next.js" />
                  <Skill skill="OpenAI API" />
                  <Skill skill="Prompt Engineering" />
                  <Skill skill="Search API" />
                  <Skill skill="Supabase" />
                  <Skill skill="LangChain" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Help debaters research and prepare for debates faster and more
                  efficiently
                </p>
              </div>
            </div>
          </div>
          <ImageCard height="h-fit" link="/projects/argumentor-demo.png" />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Development and Implementation
                </h3>
                <p>
                  Built Argumentor using Next.js to create a sleek and
                  user-friendly web application interface. Integrated GPT-3.5
                  with internet access through LangChain and the Search API to
                  ensure that generated arguments were supported by reliable and
                  current sources. Designed prompts to ensure consistency in the
                  formatting and logical flow of arguments, tailored to
                  debate-specific standards.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Core Functionality
                </h3>
                <p>
                  Allowed users to input a topic and select their stance.
                  Generated structured arguments supported by relevant sources,
                  using a combination of logical reasoning and real-time search
                  results. Enabled follow-up questions, allowing users to refine
                  their arguments or gather additional information quickly.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Team Adoption and Usage
                </h3>
                <p>
                  Launched in October 2023, Argumentor quickly became a valuable
                  resource for the debate team. Several members used it
                  extensively to speed up research and familiarize themselves
                  with unfamiliar topics before competitions. By February 2024,
                  the majority of the team transitioned to using Microsoft
                  Copilot for similar purposes, having experienced the benefits
                  of Argumentor's approach to AI-assisted research.
                </p>
              </li>
            </ol>
          </div>

          <Description
            title="Results"
            text="Argumentor significantly enhanced the debate team's research process, making it faster and more reliable. Members were able to prepare well-structured arguments in less time, boosting their preparedness and performance in debates. The tool's ability to provide trustworthy sources and answer follow-up questions proved invaluable for tackling complex topics."
          />
          <ImageCard height="h-fit" link="/projects/Argumentor.png" />
        </motion.div>
      </div>
    </>
  );
}

export default Argumentor;
