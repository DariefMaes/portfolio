import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function Dormit() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Dormit (Packed)"
          image="/projects/dormit-hero.jpg"
          subtitle=""
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
              Dormit was a startup that I worked on as the lead developer,
              focused on solving a common problem for college students: getting
              groceries and snacks late at night. Operating on campus, Dormit
              delivered groceries and snacks until 2 a.m. using scooters,
              providing unparalleled convenience for students. With a strong
              focus on innovation and efficiency, our MVP generated $10,000 in
              revenue within the first two weeks, proving the demand for such a
              service.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center whitespace-nowrap flex-wrap max-w-3xl">
                  <Skill skill="React Native" />
                  <Skill skill="React" />
                  <Skill skill="Firebase (DB and Login)" />
                  <Skill skill="Figma" />
                  <Skill skill="Graphic Design" />
                  <Skill skill="Social Media Marketing" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Provide late-night grocery delivery services to college
                  students
                </p>
              </div>
            </div>
          </div>
          <ImageCard
            height="object-center h-[400px]"
            link="/projects/dormit.png"
          />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Initial MVP and Validation
                </h3>
                <p>
                  Launched with a simple form website as our MVP, allowing users
                  to place orders and pay through Venmo. Focused on validating
                  demand quickly, which resulted in $10,000 in revenue within
                  the first two weeks of operation.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Development and Expansion
                </h3>
                <p>
                  After validating the concept, began development of a
                  full-fledged app (React Native) and website (React).
                  Integrated Firebase for managing the database and login
                  functionality to streamline the ordering process and improve
                  scalability. Developed a delivery tracking system for
                  “rushers” (delivery personnel) to ensure smooth operations and
                  on-time deliveries.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Operations</h3>
                <p>
                  Initially operated out of a dorm room, leveraging scooters for
                  efficient late-night deliveries. Focused on addressing a clear
                  pain point for students: the lack of access to food and snacks
                  late at night.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Design and Branding
                </h3>
                <p>
                  Designed a custom Dormit-themed UCSD map to enhance user
                  experience and build brand identity. Took charge of graphic
                  design efforts for marketing campaigns, creating visuals for
                  social media to attract and engage users.
                </p>
              </li>
            </ol>
          </div>

          <ImageCard
            height="h-[600px] object-center"
            link="/projects/dormit-map.png"
          />

          <Description
            title="Results"
            text="Dormit successfully demonstrated the viability of late-night grocery delivery for college campuses, generating significant revenue and meeting a clear student demand. Through innovative technology, efficient operations, and strategic marketing, we created a trusted service for UCSD students. However, after a year, we made the difficult decision to shut down operations due to challenges in securing a permanent delivery space. Dormit remains an example of how innovative thinking and agile execution can address real-world problems, even with limited resources."
          />
          <ImageCard
            height="object-center"
            link="/projects/dormit-orders.png"
          />
        </motion.div>
      </div>
    </>
  );
}

export default Dormit;
