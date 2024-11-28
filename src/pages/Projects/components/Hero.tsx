import { motion } from "motion/react";

interface HeroProps {
  type: {
    title: string;
    color: string;
  };
  title: string;
  subtitle: string;
  image: string;
}

function Hero({ type, title, subtitle, image }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex flex-col w-full -z-10 items-center"
    >
      <motion.p
        className={`px-3 py-1 text-sm w-fit font-light ${type.color} text-white rounded-full mb-3`}
      >
        {type.title}
      </motion.p>
      <div className="flex flex-col gap-2 relative h-80 items-center w-full justify-center">
        <div className="absolute w-full -z-30 h-80 rounded-2xl overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={image}
              className="w-full -z-40 object-cover h-full object-top "
            />
            <div className="absolute top-0 w-full h-full bg-black/50"></div>
          </div>
        </div>

        <h1 className="font-montserrat font-medium text-3xl text-white">
          {title}
        </h1>
        <p className="text-white w-3/4 text-center font-light">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default Hero;
