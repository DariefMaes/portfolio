import { motion } from "motion/react";

function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex items-center w-full justify-center gap-10"
    >
      <img
        src="./about.jpeg"
        className="w-[400px] h-[400px] object-cover rounded-[50px]"
      />
      <div className="flex flex-col gap-4 w-[500px] font-poppins">
        <h3 className="text-4xl font-montserrat">Darief (noun)</h3>
        <p className="italic">/ˈdaː-reef/</p>
        <p className="text-base font-light">
          A driven innovator who combines creativity, analytical expertise, and
          technical skill to solve complex problems, turning data into
          actionable insights and impactful solutions. Example: "This
          streamlined AI tool is a true Darief creation."
        </p>
      </div>
    </motion.div>
  );
}

export default About;
