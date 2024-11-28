import { motion } from "motion/react";
import Skill from "./Skill";
import { NavLink } from "react-router-dom";

const Projects: ProjectProps[] = [
  {
    title: "Indian Economic Research",
    image: "./projects/taj.png",
    skills: ["Python"],
    type: {
      title: "Research",
      color: "bg-red-500",
    },
    link: "/projects/indian-econ",
  },
  {
    title: "Debate Analysis Tool",
    image: "./projects/debate-analysis.png",
    skills: ["Python"],
    type: {
      title: "Research",
      color: "bg-red-500",
    },
    link: "/projects/debate-analysis",
  },
  {
    title: "Spillovers of Universities in Developing Countries",
    image: "./projects/university.png",
    skills: ["Python"],
    type: {
      title: "Research",
      color: "bg-red-500",
    },
    link: "/projects/college-spillover",
  },
  {
    title: "Bloomberg API Analysis",
    image: "./projects/bloomberg-analysis.png",
    skills: ["Python"],
    type: {
      title: "Research",
      color: "bg-red-500",
    },
    link: "/projects/bloomberg-api",
  },
  {
    title: "Taskified",
    image: "./projects/Respond.png",
    skills: ["Python"],
    type: {
      title: "Coding",
      color: "bg-black",
    },
    link: "/projects/taskified",
  },
  {
    title: "Dormit",
    image: "./projects/dormit.png",
    skills: ["Python"],
    type: {
      title: "Coding",
      color: "bg-black",
    },
    link: "/projects/dormit",
  },
  {
    title: "Argumentor",
    image: "./projects/debate-research.png",
    skills: ["Python"],
    type: {
      title: "Coding",
      color: "bg-black",
    },
    link: "/projects/argumentor",
  },
  {
    title: "Automatic Syllabus Scheduler",
    image: "./projects/calendar.png",
    skills: ["Python"],
    type: {
      title: "Coding",
      color: "bg-black",
    },
    link: "/projects/syllabus-scheduler",
  },
  {
    title: "Check It Out",
    image: "./projects/grocery.png",
    skills: ["Python"],
    type: {
      title: "Coding",
      color: "bg-black",
    },
    link: "/projects/check-it-out",
  },
];

interface ProjectProps {
  title: string;
  image: string;
  skills: string[];
  type: {
    title: string;
    color: string;
  };
  link: string;
}
function Project({ title, image, skills, type, link }: ProjectProps) {
  return (
    <NavLink to={link} className="flex flex-col w-full  gap-4">
      <div className="w-full h-[300px] overflow-hidden rounded-[20px]">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          src={image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-center justify-between">
          <h4 className="font-montserrat text-xl font-medium">{title}</h4>
          <p
            className={`text-sm font-light ${type.color} text-white rounded-full px-3 py-2`}
          >
            {type.title}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </NavLink>
  );
}

function Work() {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <div className="gap-2 flex flex-col items-center">
        <h3 className="font-montserrat text-3xl">Work</h3>
        <p className="text-base font-poppins font-light">
          A showcase of projects where data meets creativity to drive impact.
        </p>
      </div>
      <div className="w-full grid lg:max-w-5xl lg:grid-cols-2 justify-center items-center px-10 gap-x-5 lg:gap-x-10 gap-y-8">
        {Projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
