import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex px-12 border-b w-full py-4 z-50 items-center bg-white backdrop-blur-2xl bg-opacity-20 justify-between">
      <NavLink to={"/"} className="font-libre text-2xl">
        Darief
      </NavLink>
      <motion.button
        className="flex text-sm items-center gap-1 px-6 py-2 border-black border rounded-full"
        aria-label="Let's talk"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <span>Let's talk</span>
        <motion.div
          className="flex items-center"
          variants={{
            rest: { x: 0 },
            hover: { x: 5 },
          }}
          transition={{ type: "tween", stiffness: 300 }}
        >
          <MdArrowRightAlt size={20} />
        </motion.div>
      </motion.button>
    </div>
  );
}

export default Navbar;
