import { IconType } from "react-icons";
import { MdLanguage } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { TbTemplate } from "react-icons/tb";
import Skill from "./Skill";

function Section({
  title,
  skills,
  Icon,
}: {
  title: string;
  skills: string[];
  Icon: IconType;
}) {
  return (
    <div className="flex flex-col w-full items-center max-w-4xl gap-3">
      <div className="flex items-center gap-1 border-b w-full justify-center pb-3">
        <Icon className="w-5 h-5" />
        <h4 className="font-montserrat text-lg">{title}</h4>
      </div>
      <div className="flex flex-row gap-3 whitespace-nowrap justify-center flex-wrap">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex flex-col gap-12 w-full items-center py-20">
      <div className="gap-2 flex flex-col items-center">
        <h3 className="font-montserrat text-3xl">Skills</h3>
        <p className="text-base font-poppins font-light">
          The tools and technologies that power my problem-solving and
          innovation.
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-10">
        <Section
          Icon={MdLanguage}
          title="Languages"
          skills={[
            "Python",
            "JavaScript",
            "TypeScript",
            "SQL",
            "HTML",
            "CSS",
            "R",
            "Stata",
            "Java",
          ]}
        />
        <Section
          Icon={TbTemplate}
          title="Frameworks"
          skills={[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "Expo",
            "Tailwind CSS",

            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
          ]}
        />
        <Section
          Icon={RiToolsFill}
          title="Tools"
          skills={[
            "Git",
            "Docker",
            "Netlify",
            "Vercel",
            "Supabase",
            "Firebase",
            "GCP",
            "AWS",
          ]}
        />
      </div>
    </div>
  );
}

export default Skills;
