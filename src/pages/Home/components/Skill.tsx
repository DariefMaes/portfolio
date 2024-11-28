import { motion } from "motion/react";

function Skill({ skill }: { skill: string }) {
  return (
    <motion.div
      whileHover={{ borderColor: "#000000" }}
      key={skill}
      className="px-4 py-2 cursor-default border w-fit border-black/10 rounded-full"
    >
      {skill}
    </motion.div>
  );
}

export default Skill;
