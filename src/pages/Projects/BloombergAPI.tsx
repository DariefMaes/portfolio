import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function BloombergAPI() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Bloomberg API Analysis"
          image="/projects/bloomberg-analysis.png"
          subtitle="Utilizing Bloomberg's API to capture portfolio risk and performance"
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
              During my internship at{" "}
              <a className="underline text-blue-500" href="https://aureus.eu/">
                Auréus
              </a>{" "}
              in Amsterdam, I worked on analyzing and optimizing investment
              portfolios using a combination of Excel and Python alongside the
              Bloomberg API. My primary focus was to evaluate the risk and
              performance of a specific portfolio, identifying its strengths and
              weaknesses. By leveraging advanced tools and methodologies, I
              contributed to a restructuring of the portfolio to make it more
              forward-looking and to reduce its beta, aligning it with long-term
              strategic goals.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center">
                  <Skill skill="Excel" />
                  <Skill skill="Python" />
                  <Skill skill="Pandas" />
                  <Skill skill="Numpy" />
                  <Skill skill="Seaborn" />
                  <Skill skill="Bloomberg API" />
                  <Skill skill="Quantitative Analysis" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Optimize investment portfolio performance and risk
                </p>
              </div>
            </div>
          </div>

          <ImageCard
            height="h-[500px] object-center"
            link="/projects/aureus.jpeg"
          />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Data Extraction and Processing
                </h3>
                <p>
                  Utilized the Bloomberg API within Excel to retrieve live
                  market data on portfolio holdings and benchmark indices the
                  company used. Exported the data to Python for computationally
                  intensive analyses, ensuring efficiency and accuracy beyond
                  Excel's capabilities.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Portfolio Performance Analysis
                </h3>
                <p>
                  Calculated key metrics, including beta, to understand the
                  portfolio's sensitivity to market movements. Measured
                  risk-adjusted performance and identified underperforming or
                  overexposed assets.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Optimization and Restructuring
                </h3>
                <p>
                  Collaborated with my supervisor to identify areas of
                  improvement based on beta analysis and other risk metrics.
                  Proposed and implemented portfolio adjustments, including
                  diversification strategies and allocation changes, to reduce
                  beta and future-proof the portfolio.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Presentation to Key Stakeholders
                </h3>
                <p>
                  Prepared and delivered a detailed presentation to the
                  company's CIO and CFO to explain the rationale behind the
                  portfolio restructuring. Built a comprehensive PowerPoint deck
                  showcasing the analysis, highlighting the portfolio's
                  weaknesses and strengths, and illustrating the benefits of
                  reducing beta. Demonstrated how the proposed changes could
                  improve the portfolio's resilience and alignment with the
                  company's long-term goals.
                </p>
              </li>
            </ol>
          </div>

          <Description
            title="Results"
            text="The portfolio restructuring led to a significant reduction in beta, making it less sensitive to market fluctuations. Additionally, the portfolio projected a combined yield of over 4%, getting closer to the company's benchmark. The changes were well received by the CIO and CFO, who appreciated the forward-looking approach and the potential for long-term growth."
          />
        </motion.div>
      </div>
    </>
  );
}

export default BloombergAPI;
