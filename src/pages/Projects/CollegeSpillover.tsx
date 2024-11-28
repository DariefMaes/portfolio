import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import { motion } from "motion/react";

function CollegeSpillover() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Spillovers of Universities in Developing Countries"
          image="/projects/university.png"
          subtitle="Exploring the spillover effects of universities on the local labor market, levels of schooling, and economic growth in developing countries"
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
              As a research assistant for this research lab, my primary focus is
              on analyzing data from Uganda. This research explores how the
              establishment of higher education institutions impacts surrounding
              communities, particularly in terms of socio-economic and
              demographic changes. Since the project spans multiple countries, I
              play a crucial role in thoroughly exploring and adapting the data
              to account for country-specific differences, ensuring the analysis
              remains accurate and contextually relevant.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center">
                  <Skill skill="Stata" />
                  <Skill skill="DHS Data" />
                  <Skill skill="Econometrics" />
                  <Skill skill="Geospatial data" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Analyze the impact of universities in communities in Uganda
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Data Collection and Cleaning
                </h3>
                <p>
                  Extracted data on neighborhood demographics and socio-economic
                  indicators from DHS datasets. Cleaned and preprocessed data to
                  ensure consistency and accuracy in analysis. Merged
                  household-level data with geospatial data to establish
                  proximity metrics.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Proximity Analysis
                </h3>
                <p>
                  Calculated the distance of each neighborhood cluster to the
                  oldest university inside of the proximity zones of 25km, 50km,
                  and 75km. Reshaped data to look at a cluster-by-cluster basis.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Event Study Analysis
                </h3>
                <p>
                  Identified the timeline of university establishments in
                  Uganda. Compared pre- and post-establishment metrics for
                  neighborhoods within the defined proximity zones to measure
                  changes.
                </p>
              </li>
            </ol>
          </div>

          <Description
            title="Impact"
            text="While the research is still ongoing, some preliminary data analysis shows that developing countries invest more money into tertiary education than they do on primary and secondary education. Understanding the impact of investments on developing countries can have significant impacts on policy-making and resource allocation. By understanding the spillover effects of universities, we can better understand how to allocate resources to maximize the benefits of higher education. As developing countries continue to invest more in higher education, it is important to note if this should be prioritized over primary and secondary education."
          />
        </motion.div>
      </div>
    </>
  );
}

export default CollegeSpillover;
