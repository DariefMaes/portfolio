import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function Taskified() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Taskified"
          image="/projects/emailsmarter.png"
          subtitle="Automating email management and task prioritization with AI"
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
              As the co-founder of Taskified, I developed an AI-powered email
              client designed to integrate seamlessly with Google Calendar and
              Gmail. The primary goal of Taskified is to automate inbox
              management, enabling users to categorize emails, create actionable
              tasks, and prioritize their schedules efficiently and
              automatically. By leveraging AI models and a user-friendly
              interface, Taskified aims to redefine how professionals handle
              their emails and tasks.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light whitespace-nowrap">
                  Tools Used
                </p>
                <div className="gap-2 flex items-center flex-wrap max-w-2xl">
                  <Skill skill="NextJS" />
                  <Skill skill="LangChain" />
                  <Skill skill="Supabase" />
                  <Skill skill="OpenAI API" />
                  <Skill skill="Vector Modeling" />
                  <Skill skill="Email Systems" />
                  <Skill skill="Data Handling" />
                  <Skill skill="Google API" />
                  <Skill skill="Linear Algebra" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Automate email management and task prioritization
                </p>
              </div>
            </div>
          </div>
          <ImageCard height="h-[400px]" link="/projects/Search.png" />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Problem Identification
                </h3>
                <p>
                  Conducted interviews with consultants, realtors, and other
                  professionals to understand their pain points with email
                  management. Identified inefficiencies in existing solutions,
                  such as manual categorization and task creation.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Initial MVP Development
                </h3>
                <p>
                  Built a Chrome extension as the initial MVP to test user
                  demand and gather feedback quickly. Successfully attracted
                  over 300 signups, validating the need for an automated email
                  categorization and task management system.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  System Development
                </h3>
                <p>
                  Designed a custom categorization system leveraging OpenAI's
                  API to enable users to create personalized categories. Users
                  start by creating a category and selecting five example emails
                  for that category. The system calculates the average vector of
                  these example emails to represent the category. For every new
                  email, the system uses cosine similarity to compare its vector
                  with the average vectors of all categories and assigns the
                  email to the closest matching category. To enhance accuracy
                  and user control, the system allows users to correct any
                  miscategorized emails. When a correction is made, the average
                  vector for the category is recalculated to reflect the new
                  input, continuously improving categorization precision.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Integration</h3>
                <p>
                  Integrated with Google Calendar and Gmail to enable users to
                  create tasks directly from emails. Whenever a user received an
                  actionable email, Taskified would automatically create a task
                  inside of the platform. On top of that, users could join
                  meetings planned in their calendar right from the platform.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Testing and Refinement
                </h3>
                <p>
                  Iteratively tested the application with early adopters to
                  refine the accuracy of email categorization and overall user
                  experience. Used feedback loops to enhance the system’s
                  AI-driven precision and usability.
                </p>
              </li>
            </ol>
          </div>
          <ImageCard height="h-fit" link="../projects/demo.png" />
          <Description
            title="Results"
            text={`Over the course of developing Taskified, we achieved several key milestones. Our initial MVP got over 300 signups, validating strong user interest in an AI-powered email management tool. Feedback from early adopters highlighted the value of our custom email categorization system, which significantly reduced time spent on managing inboxes. We also successfully integrated with tools like Google Calendar and Gmail, enhancing productivity and workflow efficiency for our target audience.
              Additionally, we engaged in conversations with accelerators and investors, many of whom expressed interest in the potential of Taskified. These discussions reaffirmed the demand for a solution like ours in the market. Despite these successes, after working on Taskified for over a year, we made the decision to sell the project. This decision was driven by a lack of connections and resources needed to scale the product to its full potential. Nonetheless, Taskified remains a testament to our ability to create innovative, user-centric solutions and bring them to market effectively.`}
          />
          <ImageCard height="h-[500px]" link="/projects/Categories.png" />
        </motion.div>
      </div>
    </>
  );
}

export default Taskified;
