import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function DebateAnalysis() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Debate Analysis Tool"
          image="/projects/debate-analysis.png"
          subtitle="Analyzing and Visualizing Debate Data to Identify Trends in our Debate Team's Performance"
          type={{
            title: "Research",
            color: "bg-red-500",
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
              I started this project to help our team improve our debate
              performance. We have won 11 out of the last 13 tournaments
              attended. However, the team has been having a hard time
              identifying week points, due to the absence of a tool that can
              help us analyze our performance. This tool will help us identify
              trends in our performance, and help us improve our performance in
              future tournaments. On top of that, we are seeing an improvement
              in our competitor's performance. This tool can help us identify
              who our biggest competitors are, and how we can improve our
              performance to beat them.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center">
                  <Skill skill="Typescript" />
                  <Skill skill="React" />
                  <Skill skill="NodeJS" />
                  <Skill skill="Webscraping" />
                  <Skill skill="SQL" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Identify trends in our debate performance
                </p>
              </div>
            </div>
          </div>
          <ImageCard link="/projects/debate-analysis-ss.png" />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium text-3xl">
              Methodology
            </h3>
            <br />
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Data Preprocessing
                </h3>
                <p>
                  Scraped all tournaments UCSD attended this year from{" "}
                  <a
                    href="https://www.forensicstournament.net"
                    className="text-blue-600 underline"
                  >
                    ForensicsTournament.net
                  </a>{" "}
                  using Cheerio and Axios in Node.js. Parsed the HTML data to
                  extract key details such as tournament name, date, location,
                  and results. Stored the cleaned data in a Supabase database
                  for seamless access and further analysis.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Data Handling</h3>
                <p>
                  Leveraged SQL queries to organize the data by tournament name,
                  date, and outcomes. Calculated overall win rates per
                  tournament and broke down individual performance metrics to
                  uncover trends and insights.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Visualization</h3>
                <p>
                  Built a React application to create interactive visualizations
                  using charts and graphs. Displayed metrics such as win rates
                  and individual performance for each tournament, making it easy
                  to track progress and identify trends in our debate
                  performance.
                </p>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium text-3xl">
              Database Schema
            </h3>
            <p className="text-gray-700 font-poppins font-light">
              The database is organized into six tables to efficiently store and
              manage the data extracted from ForensicsTournament.
            </p>
            <table className="table-auto w-full text-left border-collapse mt-4 text-gray-700">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 font-semibold">Table Name</th>
                  <th className="py-2 px-4 font-semibold">Purpose</th>
                  <th className="py-2 px-4 font-semibold">Key Fields</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    table: "Debate",
                    purpose: "Stores information about debate rounds.",
                    fields:
                      "id, round_id, aff_participant_id, neg_participant_id, winner_participant_id",
                  },
                  {
                    table: "Entries",
                    purpose:
                      "Links participants to their respective debate rounds.",
                    fields: "id, round_id, participant_id",
                  },
                  {
                    table: "Events",
                    purpose:
                      "Contains details about each tournament event and its type.",
                    fields: "id, tournament_id, name, type, unique_event_id",
                  },
                  {
                    table: "Member",
                    purpose:
                      "Stores information about participants and their schools for all tournaments.",
                    fields: "id, name, school, is_team",
                  },
                  {
                    table: "Participants",
                    purpose: "Links participants to their respective events.",
                    fields: "id, event_id, member_id",
                  },
                  {
                    table: "Rounds",
                    purpose:
                      "Contains information about each debate round for every event.",
                    fields: "id, event_id, type, round",
                  },
                  {
                    table: "Tournaments",
                    purpose: "Stores details about each tournament.",
                    fields: "id, name, url, start_date, end_date, scraped",
                  },
                  {
                    table: "Unique Events",
                    purpose: "Contains unique event IDs for all tournaments.",
                    fields: "id, name",
                  },
                ].map(({ table, purpose, fields }, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 font-light">{table}</td>
                    <td className="py-2 px-4 font-light">{purpose}</td>
                    <td className="py-2 px-4 font-light">{fields}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Description
            title="Results"
            text="The Debate Analysis Tool has provided valuable insights into our team's performance. While we have only been using the tool for a few months, we have already identified several trends that have helped us improve our performance. For example, we discovered that our biggest competitor has a higher average win rate than us. This can help us, especially for our student coaches, to focus on specific areas of improvement to beat them in future tournaments. Additionally, the individual performance metrics have helped us identify our strongest and weakest debaters, allowing us to tailor our training sessions to address their needs."
          />
          <ImageCard height="h-fit" link="../projects/dm-debate.png" />
        </motion.div>
      </div>
    </>
  );
}

export default DebateAnalysis;
