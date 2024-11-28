import { MdArrowRightAlt, MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className="flex flex-col w-full flex-1 justify-around items-center px-12 gap-5">
      <div className="flex items-center gap-10 w-full flex-col">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="w-[140px] h-[140px] object-cover rounded-full"
          src="./profile.jpeg"
        />
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="text-5xl max-w-5xl font-light font-poppins text-center"
        >
          Crafting <span className="font-bold">Innovation</span> at the
          Intersection of Data, Technology, and Business
        </motion.h1>
      </div>
      <div className="flex w-full flex-col gap-4 mt-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          className="flex flex-row gap-4 "
        >
          <img
            className="object-cover rounded-[50px] w-[500px] h-32"
            src="./data-world.png"
            alt="Example 1"
          />
          <video
            autoPlay
            loop
            muted
            className="object-cover rounded-[50px] w-full h-32"
          >
            <source src="./coding.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
          className="flex flex-row gap-4 "
        >
          <video
            autoPlay
            loop
            muted
            className="object-cover rounded-[50px] w-[200px] h-32"
          >
            <source src="./color.mp4" type="video/mp4" />
          </video>
          <img
            className="object-cover rounded-[50px] w-full h-32 object-top"
            src="./morocco.png"
            alt="Example 2"
          />
          <img
            className="object-cover rounded-[50px] w-full h-32 object-bottom"
            src="./maastricht.png"
            alt="Example 2"
          />
        </motion.div>
      </div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex text-sm w-fit items-center gap-1 px-6 py-2 border-black border rounded-full"
      >
        <span>See more</span> <MdKeyboardArrowDown />
      </motion.button>
    </div>
  );
}

export default Hero;
