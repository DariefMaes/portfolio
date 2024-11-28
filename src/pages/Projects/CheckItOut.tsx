import Navbar from "../Home/components/Navbar";
import Skill from "../Home/components/Skill";
import Description from "./components/Description";
import Hero from "./components/Hero";
import ImageCard from "./components/ImageCard";
import { motion } from "motion/react";

function CheckItOut() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-start px-10 py-5 gap-5 max-w-5xl mx-auto">
        <Hero
          title="Indian Economic Research"
          image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subtitle="Using Machine Learning to Analyze and Predict India's GDP Growth Based on Socioeconomic Indicators"
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
              This project explores the use of machine learning to predict GDP
              growth for India. It employs socioeconomic indicators such as
              education enrollment rates, public debt ratios, and consumption
              patterns to build a regression model for forecasting GDP. By
              identifying key features and understanding their correlations with
              GDP growth, this model provides insights into economic trends and
              policy planning.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Tools Used</p>
                <div className="gap-2 flex items-center">
                  <Skill skill="Python" />
                  <Skill skill="Pandas" />
                  <Skill skill="NumPy" />
                  <Skill skill="Seaborn" />
                  <Skill skill="Scikit-learn" />
                  <Skill skill="Data Handling" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b pb-4 w-full justify-between">
                <p className="font-poppins font-light">Goal</p>
                <p className="font-poppins font-light">
                  Uncover patterns in economic growth
                </p>
              </div>
            </div>
          </div>
          <ImageCard link="../ss_eda.png" />

          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-medium  text-3xl">
              Methodology
            </h3>
            <ol className="list-decimal flex flex-col gap-3 pl-5 text-gray-700 font-poppins font-light">
              <li>
                <h3 className="font-medium text-gray-900">
                  Data Preprocessing
                </h3>
                <p>
                  Loaded socioeconomic indicators dataset from the World Bank
                  and handled missing values using linear interpolation and
                  backfill methods. Normalized features with Z-score
                  standardization for consistent scaling and enhanced model
                  performance.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">
                  Feature Engineering
                </h3>
                <p>
                  Selected key indicators with the highest correlations to GDP
                  growth through statistical analysis. Reduced multicollinearity
                  by examining relationships among features, ensuring robust
                  predictions.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Modeling</h3>
                <p>
                  Built a regression model using XGBoost to predict GDP growth.
                  Split the data into training (pre-2010) and testing
                  (post-2010) sets. Evaluated performance using Mean Squared
                  Error (MSE) and correlation coefficient.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900">Comparison</h3>
                <p>
                  Validated predictions by comparing model outputs with World
                  Bank GDP forecasts, demonstrating the model's accuracy and
                  reliability in economic forecasting.
                </p>
              </li>
            </ol>
          </div>

          <table className="table-auto w-full text-left border-collapse mt-4 text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 font-semibold">Features</th>
                <th className="py-2 px-4 font-semibold text-right">
                  Correlation
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "GDP Growth", correlation: "1.0" },
                {
                  feature: "School Enrollment, Tertiary, Female",
                  correlation: "0.21",
                },
                {
                  feature: "Public and Publicly Guaranteed Debt Service",
                  correlation: "-0.12",
                },
                {
                  feature: "Prevalence of Stunting, Height for Age",
                  correlation: "-0.35",
                },
                {
                  feature: "School Enrollment, Secondary",
                  correlation: "-0.33",
                },
                { feature: "Terms of Trade Adjustment", correlation: "-0.32" },
                { feature: "Inflation, Consumer Prices", correlation: "-0.03" },
                {
                  feature: "Children Out of School, Male",
                  correlation: "-0.37",
                },
                {
                  feature: "Taxes on Goods and Services",
                  correlation: "-0.27",
                },
                {
                  feature: "Pupil-teacher Ratio, Primary",
                  correlation: "-0.22",
                },
                {
                  feature: "Services, Value Added",
                  correlation: "0.72",
                },
                {
                  feature: "GNI Growth",
                  correlation: "1.0",
                },
                {
                  feature: "Final Consumption Expenditure",
                  correlation: "0.85",
                },
                {
                  feature: "Real Interest Rate",
                  correlation: "-0.15",
                },
                {
                  feature: "Changes in Inventories",
                  correlation: "0.41",
                },
                {
                  feature: "Electric Power Consumption",
                  correlation: "0.3",
                },
                {
                  feature: "Air Transport, Passengers Carried",
                  correlation: "0.23",
                },
              ].map(({ feature, correlation }, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 font-light">{feature}</td>
                  <td className="py-2 px-4 text-right font-light">
                    {correlation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Description
            title="Results"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis
        asperiores eligendi error minima voluptate aut voluptatum amet commodi
        dolore magni vel impedit, cum mollitia, suscipit perspiciatis aperiam
        recusandae dolores eveniet est eum id in molestiae! Optio error autem
        rerum laudantium deserunt sunt voluptas inventore iste. Consectetur
        eligendi obcaecati aut sequi, ab corrupti veritatis quo accusantium
        delectus neque earum aspernatur perspiciatis commodi culpa soluta
        repellat fugit quasi esse blanditiis dolores. At nostrum et nisi in nam
        distinctio voluptate ab consequatur commodi, doloremque, quibusdam
        voluptates voluptas culpa a ipsam dolore adipisci. Atque, illo ab! Quam
        veritatis quae perspiciatis explicabo corporis magni."
          />
          <ImageCard height="h-fit" link="../model-graph.png" />
        </motion.div>
      </div>
    </>
  );
}

export default CheckItOut;
